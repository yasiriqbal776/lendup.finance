import { Box } from '@/components/Box';
import { Flex, RowBetween, RowStart, RowCenter } from '@/components/Box/Flex';
import Filter from '@/components/Svg/Icons/Filter';
import Search from '@/components/Svg/Icons/Search';
import { Input } from '@/components/Input';
import { TableCustom, TableRowCellType } from '@/components/Table';
import { Text } from '@/components/Text';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Button from '@/components/Button/Button';
import IconButton from '@/components/Button/IconButton';
import styled from 'styled-components';
import LendModal from '@/components/Modals/LendModal';
import SolanaIcon from '@/components/Svg/Icons/Solana';
import EthIcon from '@/components/Svg/Icons/Eth';
import AvaxIcon from '@/components/Svg/Icons/Avax';

const lendStats = [
  {
    label: 'Total Borrowed',
    value: '$27,194.46',
  },
  {
    label: 'Recent APR',
    value: '104.22%',
  },
  {
    label: 'Loan Num',
    value: '7,107',
  },
  {
    label: 'Accrued Interest',
    value: '$845.56',
  },
];

const collections = [
  {
    url: '/azuki.svg',
    name: 'Azuki',
  },
  {
    url: '/art.svg',
    name: 'Art Block A1',
  },
  {
    url: '/azuki.svg',
    name: '0N1 Force',
  },
  {
    url: '/chimpers.svg',
    name: 'Chimpers',
  },
];

const TableHead = [
  {
    id: 1,
    title: 'Item',
  },
  {
    id: 2,
    title: 'Valuation',
  },
  {
    id: 3,
    title: 'Terms',
  },
  {
    id: 4,
    title: 'Network',
  },
  {
    id: 5,
    title: 'Action',
  },
];
const data = [
  {
    id: 1,
    nft: {
      name: 'Renga#8364',
      des: 'a kid call beast',
      url: '/azuki.svg',
    },
    valuation: '1.9328',
    terms: '5.5 Ξ/7 days',
    network: ['eth', 'solana', 'avax'],
  },
  {
    id: 2,
    nft: {
      name: 'Renga#8300',
      des: 'Art Gobblers',
      url: '/art.svg',
    },
    valuation: '1.8328',
    terms: '5.5 Ξ/7 days',
    network: ['eth', 'polygon'],
  },
  {
    id: 3,
    nft: {
      name: 'Ourboros#125',
      des: 'Azuki',
      url: '/azuki.svg',
    },
    valuation: '3.9328',
    terms: '5.5 Ξ/7 days',
    network: ['polygon'],
  },
  {
    id: 4,
    nft: {
      name: 'Renga#8364',
      des: 'a kid call beast',
      url: '/art.svg',
    },
    valuation: '1.9328',
    terms: '5.5 Ξ/7 days',
    network: ['eth', 'solana', 'avax'],
  },
  {
    id: 5,
    nft: {
      name: 'Renga#8300',
      des: 'Art Gobblers',
      url: '/art.svg',
    },
    valuation: '1.8328',
    terms: '5.5 Ξ/7 days',
    network: ['eth', 'polygon'],
  },
  {
    id: 6,
    nft: {
      name: 'Ourboros#125',
      des: 'Azuki',
      url: '/art.svg',
    },
    valuation: '3.9328',
    terms: '5.5 Ξ/7 days',
    network: ['polygon'],
  },
];

const Lend = () => {
  const router = useRouter();
  const [lendModal, setLendModal] = React.useState(false);

  const TableRows: TableRowCellType[] = data.map(item => ({
    cells: [
      {
        cell: () => (
          <RowCenter key={item?.id} gap="8px">
            <Image src={item?.nft?.url} alt="p" width={32} height={32} />
            <Box>
              <Text variant="h7">{item?.nft?.name}</Text>
              <Text textAlign="left" variant="p6">
                {item?.nft?.des}
              </Text>
            </Box>
          </RowCenter>
        ),
      },
      {
        cell: () => <>{item?.valuation}</>,
      },
      {
        cell: () => <>{item?.terms}</>,
      },
      {
        cell: () => (
          <RowCenter>
            <SolanaIcon />
            <EthIcon />
            <AvaxIcon />
          </RowCenter>
        ),
      },
      {
        cell: () => <Button onClick={() => setLendModal(true)}>Make Offer</Button>,
        disableClick: true,
      },
    ],
    onClick: () => router?.push(`/nft/${item?.id}`),
  }));
  return (
    <Container>
      <Box padding="0 56px">
        <Text variant="h3">NFT Loan</Text>
        <Text variant="p4">Offer loans to other users on their non-fungible tokens.</Text>
        {/* Statistics */}
        <RowBetween gap="24px" margin="13px 0 34px">
          {lendStats?.map((item, ind) => (
            <StatBox key={ind}>
              <Text variant="p4">{item?.label}</Text>
              <Text variant="h5">{item?.value}</Text>
            </StatBox>
          ))}
        </RowBetween>
      </Box>
      <RowStart borderTop="2px solid" borderColor="borderColor">
        {/* Search Section */}
        <Flex flexDirection="column" alignSelf="stretch" width="20%" height="100%" padding="12px 16px">
          <RowBetween gap="12px" marginBottom="12px">
            <Input contentLeft={<Search />} placeholder="Search" />
            <IconButton variant="tertiary">
              <Filter />
            </IconButton>
          </RowBetween>
          {collections?.map((item, ind) => (
            <CollectionItem key={ind} gap="12px">
              <Image src={item?.url} alt="o" width={24} height={24} />
              <Text variant="p4" color="textLink" fontWeight="500">
                {item?.name}
              </Text>
            </CollectionItem>
          ))}
        </Flex>
        <Flex flexDirection="column" alignSelf="stretch" width="80%" borderLeft="1px solid" borderColor="primaryDark">
          <RowBetween padding="12px 16px">
            <RowStart border="1px solid" borderColor="border" borderRadius="8px">
              <PillButton variant="text" className="selected">
                NFT with Terms
              </PillButton>
              <PillButton variant="text">Recent Loan</PillButton>
            </RowStart>
            <RowBetween gap="12px">
              <Input contentLeft={<Search />} placeholder="Search" />
              <Button
                startIcon={
                  <RowStart>
                    <Filter />
                  </RowStart>
                }
                variant="tertiary"
              >
                Filters
              </Button>
            </RowBetween>
          </RowBetween>
          {/* NFT Table */}
          <TableCustom heads={TableHead} rows={TableRows} />
        </Flex>
      </RowStart>
      <LendModal setShow={setLendModal} show={lendModal} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 46px;
`;
const StatBox = styled.div`
  border: 1px solid #d0d5dd;
  border-radius: 12px;
  padding: 24px 0 23px 23px;
  width: 100%;
`;

const CollectionItem = styled(RowStart)`
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 4px;
  &:hover {
    background: ${({ theme }) => theme.colors.hrColor};
    cursor: pointer;
  }
`;
const PillButton = styled(Button)`
  padding: 10px 16px;
  color: ${({ theme }) => theme.colors.textLink};
  font-weight: 500;
  border-radius: 8px;
  &.selected {
    background-color: ${({ theme }) => theme.colors.borderColor};
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export default Lend;
