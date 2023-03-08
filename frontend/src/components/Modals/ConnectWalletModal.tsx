import React from 'react';
import Close from '../Svg/Icons/Close';
import Tick from '../Svg/Icons/Tick';
import StyledModal from './StyledModal';
import { RowBetween, ColumnBetween } from '@/components/Box/Flex';
import { Box } from '@/components/Box';

interface ModalProps {
  show: boolean;
  setShow: Function;
}
const wallets = [
  {
    img: './assets/images/metamask.svg',
    title: 'Metamask',
    selected: true,
  },
  // {
  //   img: './assets/images/exodus.svg',
  //   title: 'Exodus',
  //   selected: false,
  // },
  // {
  //   img: './assets/images/Phantom.svg',
  //   title: 'Phantom',
  //   selected: false,
  // },
  // {
  //   img: './assets/images/walletconnect.svg',
  //   title: 'Wallet connect',
  //   selected: false,
  // },
  // {
  //   img: './assets/images/trustwallet.svg',
  //   title: 'Trust Wallet',
  //   selected: false,
  // },
];

const ConnectWalletModal: React.FC<ModalProps> = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <StyledModal show={show} setShow={handleClose}>
      <Box className="content">
        <p className="modal-title">
          Connect Wallet <Close onClick={handleClose} />
        </p>
        <RowBetween className="wallets ">
          {wallets.map((wallet, ind) => (
            <ColumnBetween className="wallet-wrapper" key={ind}>
              {wallet.selected && <Tick />}
              <img src={wallet.img} alt="" />
              <p>{wallet.title}</p>
            </ColumnBetween>
          ))}
        </RowBetween>
      </Box>
    </StyledModal>
  );
};

export default ConnectWalletModal;
