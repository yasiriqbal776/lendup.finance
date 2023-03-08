import React from 'react';
import Close from '../Svg/Icons/Close';
import StyledModal from './StyledModal';
import { Button } from '@/components/Button';
import { Box } from '@/components/Box';
import { RowBetween, RowStart } from '@/components/Box/Flex';
import { Text } from '../Text';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import Percentage from '../Svg/Icons/Percentage';
import { Select } from '../Select';
import Chevron from '../Svg/Icons/Chevron';
import Image from 'next/image';
import 'react-datetime/css/react-datetime.css';
interface ModalProps {
  show: boolean;
  setShow: Function;
}

const LendModal: React.FC<ModalProps> = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const { register, handleSubmit } = useForm();
  return (
    <StyledModal show={show} setShow={handleClose}>
      <Box className="content">
        <p className="modal-title border-bottom">
          Offer to lend <Close onClick={handleClose} />
        </p>
        <RowStart className="img-wrapper" gap={'12px'}>
          <Image src="/assets/images/nft.png" alt="nft" width={64} height={64} />
          <Text className="name">
            Renga#8364 <span>a kid call beast</span>
          </Text>
        </RowStart>
        <Box className="details-wrapper">
          <RowBetween>
            <Text className="label">Valuation</Text>
            <RowStart gap="4px" className="value">
              <img src="./assets/images/ethereum.svg" alt="" /> 3.2638
            </RowStart>
          </RowBetween>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            <RowBetween gap={'12px'} mb="48px">
              <Box className="form-group" width={'50%'}>
                <Text className="label">Loan Value</Text>
                <Input placeholder="Loan Value" {...register('loanValue')} />
                <span className="value">Floor: 2.4</span>
              </Box>
              <Box className="form-group" width={'50%'}>
                <Text className="label">Currency</Text>
                <Select name="" id="" contentRight={<Chevron />}>
                  <option value="">ETH</option>
                </Select>
              </Box>
            </RowBetween>
            <Box className="form-group" mb={'48px'}>
              <Text className="label">APR</Text>
              <Input className="w-100" contentRight={<Percentage fill="#667085" />} placeholder="Loan Value" {...register('loanValue')} />
              <span className="value">Floor: N/A (Actual APR: N/A) Interest Rate: N/A</span>
            </Box>
            <Box className="form-group" mb={'48px'}>
              <Text className="label">Duration</Text>
              <Select name="" id="">
                {[1, 2, 3, 4, 5, 6, 7].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <span className="value">No more than 1 offer can be placed for each duration</span>
            </Box>
            <Box className="form-group" mb={'48px'}>
              <Text className="label">Expires After</Text>
              <Select name="" id="">
                {[1, 2, 3, 4, 5, 6, 7].map(item => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </Box>
            <Button type="submit" variant="filled" width={'100%'}>
              Offer
            </Button>
          </form>
        </Box>
      </Box>
    </StyledModal>
  );
};

export default LendModal;
