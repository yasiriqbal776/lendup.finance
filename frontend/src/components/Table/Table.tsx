import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';
export interface TableRowCellType {
  cells: { cell: () => React.ReactElement; disableClick?: boolean }[];
  onClick?: () => void;
}

export const TableWrapper = styled.table`
  min-width: 100%;
  border-spacing: 0px;
  margin-bottom: 0;
  thead {
    background: ${props => props.theme.colors.backgroundAlt};
    tr {
      border-radius: 1.2rem 1.2rem 0 0 !important;
      font-weight: 400;
      & > th {
        padding: 6px 0;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.textTertiary};
      }
    }
  }
  tbody {
    border-top: 0.2rem solid ${props => props.theme.colors.backgroundAlt} !important;
    tr {
      cursor: pointer;
      border: 0.1rem solid ${props => props.theme.colors.backgroundAlt};
      &:hover {
        background-color: ${props => props.theme.colors.backgroundAlt};
      }
      td {
        font-size: 14px;
        padding: 12px 0;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
`;

export const TableScrollWrapper = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
  }
`;
interface TableProps {
  heads: {
    id: number;
    title: string;
  }[];
  rows: TableRowCellType[];
}

export const TableCustom: React.FC<TableProps> = ({ rows, heads }) => {
  return (
    <TableScrollWrapper>
      <TableWrapper>
        <thead>
          <tr>
            {heads.map((head, ind) => {
              return <th key={ind}> {head.title} </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            return (
              <tr key={i}>
                {row?.cells.map((C, j) => {
                  return (
                    <td
                      key={j}
                      onClick={() => {
                        !C?.disableClick && row?.onClick();
                      }}
                    >
                      {<C.cell />}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableWrapper>
    </TableScrollWrapper>
  );
};
