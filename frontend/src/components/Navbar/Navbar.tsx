import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { RowStart } from '../Box/Flex';
import Button from '../Button/Button';
import { NavLink } from '../NavLink';
import Settings from '../Svg/Icons/Settings';
import Wallet from '../Svg/Icons/Wallet';
import ConnectWalletModal from '../Modals/ConnectWalletModal';

const Navbar = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <NavbarFixedTop>
        <NavbarInner>
          <Image alt="logo" src={'/logo.svg'} width={244} height={32} />
          <RowStart gap="29px">
            <NavLink href={'/'} name="Lend" />
            <NavLink href={'/borrow'} name="Borrow" />
            <NavLink href={'/about'} name="About" />
            <NavLink href={'/account'} name="Account" />
          </RowStart>
          <RowStart gap="12px">
            <Button
              variant="secondary"
              onClick={() => setShowModal(true)}
              startIcon={
                <RowStart>
                  <Wallet />
                </RowStart>
              }
            >
              Connect wallet
            </Button>
            <Settings />
          </RowStart>
        </NavbarInner>
      </NavbarFixedTop>
      <ConnectWalletModal show={showModal} setShow={setShowModal} />
    </>
  );
};

const NavbarFixedTop = styled.div`
  width: 100%;
  z-index: 99;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.borderColor};
`;

export default Navbar;
