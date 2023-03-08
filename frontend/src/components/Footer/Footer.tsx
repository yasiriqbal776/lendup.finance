import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
import { RowBetween, RowStart } from '../Box/Flex';
import { Button } from '../Button';
import { Input } from '../Input';
import { NavLink } from '../NavLink';
import { Text } from '../Text';

const Footer = () => {
  return (
    <Container>
      <RowBetween>
        <Box>
          <Image alt="logo" src={'/logo.svg'} width={244} height={32} />
          <RowStart gap="32px" marginTop="32px">
            <NavLink href={'/'} name="Lend" />
            <NavLink href={'/borrow'} name="Borrow" />
            <NavLink href={'/about'} name="About" />
            <NavLink href={'/account'} name="Account" />
          </RowStart>
        </Box>
        <Box>
          <Text variant="h7" color="textLink" fontWeight="600">
            Stay up to date
          </Text>
          <RowStart gap="16px" marginTop="16px">
            <Input placeholder="Enter your email" />
            <Button padding="10px 18px" variant="contained">
              Subscribe
            </Button>
          </RowStart>
        </Box>
      </RowBetween>
      <Divider />
      <RowBetween>
        <Text variant="p4" color="textLight2">
          © {new Date().getFullYear()} Lendup.Finance. All rights reserved.
        </Text>
        <RowStart gap="18px">
          <Text variant="p4" color="textLight2">
            Terms
          </Text>
          <Text variant="p4" color="textLight2">
            Privacy
          </Text>
          <Text variant="p4" color="textLight2">
            Cookies
          </Text>
        </RowStart>
      </RowBetween>
    </Container>
  );
};
const Divider = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  margin: 64px 0 32px;
`;
const Container = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 64px 9% 48px;
`;

export default Footer;
