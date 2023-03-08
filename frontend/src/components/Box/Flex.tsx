import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';
import { FlexProps } from './types';

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
export const RowBetween = styled(Flex)<{ gap?: string }>`
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.gap ?? '0px'};
  ${flexbox}
`;
export const RowStart = styled(Flex)<{ gap?: string }>`
  align-items: center;
  gap: ${props => props.gap ?? '0px'};
`;
export const RowCenter = styled(Flex)<{ gap?: string }>`
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap ?? '0px'};
`;
export const ColumnBetween = styled(Flex)<{ gap?: string }>`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.gap ?? '0px'};
  ${flexbox}
`;
