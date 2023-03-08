import styled from 'styled-components';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export const NavLink = ({ href, name }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href} passHref legacyBehavior>
      <Anchor className={isActive && 'active'}>{name}</Anchor>
    </Link>
  );
};

const Anchor = styled.a`
  color: ${({ theme }) => theme.colors.textLink};
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
