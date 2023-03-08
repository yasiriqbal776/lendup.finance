import styled from 'styled-components';

export const StyledTabs = styled.div`
  border: 1px solid #d0d5dd;
  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
  border-radius: 8px;
  width: 263px;
  margin-top: 10px;
  // margin-left: 10px;
  .nav-item {
    .nav-link {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #1d2939;
      padding: 10px 16px;
      border-radius: 8px;
      border: 0;
      border-right: 1px solid #d0d5dd;
      background: #f9fafb;
      outline: 0;
      box-shadow: none;
      margin: 0;
      &:last-child {
        border-right: 0;
      }
      &.active {
        background: #ffffff;
      }
    }
  }
`;
