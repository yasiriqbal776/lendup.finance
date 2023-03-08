import { Box } from '@/components/Box';
import { RowBetween, RowStart, Flex } from '@/components/Box/Flex';
import { Button } from '@/components/Button';
import { EthIcon, HeartIcon, ShareIcon } from '@/components/Svg';
import { Text } from '@/components/Text';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const tabsEnum = {
  PROPERTIES: 'Properties',
  DESCRIPTION: 'Description',
  INFO: 'Info',
};
const tabs = [tabsEnum.PROPERTIES, tabsEnum.DESCRIPTION, tabsEnum.INFO];

const ItemDetail = ({ label, value }: { label: string; value: string }) => {
  return (
    <RowBetween>
      <Text variant="p4" color="textSubtle">
        {label}
      </Text>
      <Text variant="p4" color="textLink">
        {value}
      </Text>
    </RowBetween>
  );
};

const NftDetail = () => {
  const [active, setActive] = useState(tabs[0]);
  return (
    <RowStart padding="64px 9% 80px" gap="25px" alignItems="flex-start !important">
      <ImgBox>
        <Image src="/nft.png" alt="nft" width={552} height={692} />
      </ImgBox>
      <Box width="100%">
        <Text variant="p4">a kid call beast</Text>
        <Text variant="h4">Renga#8364</Text>
        <RowBetween marginTop="16px">
          <RowStart>
            <Text variant="p4">Owned by</Text>
            <Text variant="p4" paddingLeft="6px" color="textLink">
              0xdf5c....EB24
            </Text>
          </RowStart>
          <RowStart gap="20px">
            <RowStart gap="7px">
              <HeartIcon />
              <Text variant="p4" color="textLink">
                234
              </Text>
            </RowStart>
            <RowStart gap="15.8px">
              <ShareIcon />
              <Text variant="p4" color="textLink">
                234
              </Text>
            </RowStart>
          </RowStart>
        </RowBetween>
        <Text variant="p4" padding="30px 0 2px">
          Repayment
        </Text>
        <RowStart gap="6px">
          <EthIcon />
          <Text variant="h5">0.172525</Text>
        </RowStart>
        <Text variant="p5" paddingTop="12px">
          {'March 20, 2023 16:58 (13 days)'}
        </Text>
        <RowStart gap="8px" margin="8px 0 32px">
          <PillBox>
            <Text variant="p6">Borrower</Text>
            <Text variant="p6">0xfb30</Text>
          </PillBox>
          <PillBox>
            <Text variant="p6">Lender</Text>
            <Text variant="p6">0xfb30</Text>
          </PillBox>
          <PillBox>
            <Text variant="p6">Loan Value</Text>
            <Text variant="p6">0.7 Ξ</Text>
          </PillBox>
        </RowStart>
        <Button variant="contained">Make Offer</Button>
        {/* Tabs here */}
        <Flex margin="24px 0">
          {tabs.map(type => (
            <Tab key={type} active={active === type} onClick={() => setActive(type)}>
              {type}
            </Tab>
          ))}
        </Flex>
        {/* Description here */}
        {active === tabsEnum.DESCRIPTION && (
          <Text variant="p4" color="textLink" paddingBottom="141px">
            Lorem ipsum dolor sit amet consectetur. Consectetur enim ut blandit viverra duis blandit egestas euismod. Nunc elementum orci mi luctus vestibulum nunc. Rhoncus amet
            nulla lorem tincidunt non. Quam ultrices nulla nisl sit facilisi dapibus dictum mattis.
          </Text>
        )}
        {/* Properties here */}
        <ItemDetail label="Trait Count" value={'9 (21.6%)'} />
        <ItemDetail label="Background" value={'Warm Gray (18.4%)'} />
        <ItemDetail label="Clothes" value={'General’s Uniform (1.8%)'} />
        <ItemDetail label="Ear" value={'Silver Huggies (0.7%)'} />
        <ItemDetail label="Eye" value={'Disappointed  (7.7%)'} />
        <ItemDetail label="Face" value={'Retro Shades (2.2%)'} />
        <ItemDetail label="Hair" value={'Black Ombre Wolftail (8.0%)'} />
        <ItemDetail label="Mouth" value={'Smoking (3.8%)'} />
        <ItemDetail label="Tatto" value={'Valhalla Tattoo (85.0%)'} />
        <ItemDetail label="Type" value={'Human (18.4%)'} />
        <Divider />
      </Box>
    </RowStart>
  );
};

const ImgBox = styled.div`
  width: 100%;
  img {
    border-radius: 12px;
    width: 552px;
    height: 692px;
    object-fit: cover;
  }
`;
const PillBox = styled(RowStart)`
  background: ${({ theme }) => theme.colors.backgroundAlt2};
  padding: 4px 16px 4px 4px;
  border-radius: 16px;
  width: max-content;
  div:first-child {
    padding: 2px 8px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.background};
  }
  div {
    color: ${({ theme }) => theme.colors.textLink};
  }
`;

const Tab = styled.button<{ active: boolean }>`
  font-size: 14px;
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0.6;
  color: ${({ theme }) => theme.colors.textLink};
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  outline: 0;
  ${({ active, theme }) =>
    active &&
    `
    color: ${theme.colors.primaryBright};
    border-bottom: 2px solid ${theme.colors.primaryBright};
    font-weight: 600;
    opacity: 1;
  `}
`;

const Divider = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  margin: 16px 0 0;
`;

export default NftDetail;
