import React, { ReactElement } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

interface ModalProps {
  show: boolean;
  setShow: Function;
  children: ReactElement;
}

const StyledModal: React.FC<ModalProps> = ({ show, setShow, children }) => {
  const handleClose = () => setShow(false);
  React.useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <StyledModalComponent isOpen={show} onRequestClose={handleClose} contentLabel="" className="Modal">
      {children}
    </StyledModalComponent>
  );
};

const StyledModalComponent = styled(Modal)`
  &.Modal {
    width: 466px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    max-height: 90vh;
    overflow-y: auto;
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
    .content {
      padding: 24px;

      .modal-header {
        border-bottom: 0;
      }
      .modal-title {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.text};
        display: flex;
        align-items: center;
        padding-bottom: 16px;
        margin: 0;
        justify-content: space-between;
        &.border-bottom {
          border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottomColor};
        }
      }
      .description {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        padding: 12px 0px;
        color: ${({ theme }) => theme.colors.background};
        margin: 0;
        border-bottom: 0.5px solid ${({ theme }) => theme.colors.borderBottomColor};
      }
      .img-wrapper {
        margin-top: 20px;
        .name {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #2e2e3a;
          display: flex;
          flex-direction: column;
          gap: 0;
          span {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.secondaryTextColor};
          }
        }
      }
      .details-wrapper {
        margin-top: 34px;
        .label {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: ${({ theme }) => theme.colors.labelColor};
        }
        .value {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          text-align: right;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      form {
        margin-top: 26px;
        .form-group {
          position: relative;
          .w-100 {
            width: 100%;
          }
          .rdt {
            .rdtPicker {
              display: block !important;
            }
          }
          .value {
            position: absolute;
            left: 10px;
            bottom: -20px;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: ${({ theme }) => theme.colors.secondaryText};
          }
          select {
            width: 100%;
          }
          .label {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.textSubtle};
            margin-bottom: 8px;
          }
        }
      }
      .btns-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 16px;
        button {
          width: 50%;
          &:last-child {
            margin-left: 12px;
          }
        }
      }
      .loader-btn {
        width: 100%;
        margin-top: 16px;
      }
      .wallets {
        display: flex;
        justify-content: space-between;

        .wallet-wrapper {
          position: relative;
          svg {
            position: absolute;
            top: 0;
            right: -10px;
          }
          p {
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            text-align: center;
            color: ${({ theme }) => theme.colors.background};
          }
        }

        .connected-wrapper {
          background: #f5f5f5;
          border-radius: 8px;
          padding: 16px;
          margin-top: 24px;
          .title {
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.background};
          }
          .address-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .address {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border: 1px solid #999ca0;
              border-radius: 8px;
              padding: 4px;
              p {
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                color: ${({ theme }) => theme.colors.background};
              }
              .img {
                img {
                  width: 24px;
                  height: 24px;
                }
              }
            }
            .icon {
              border-radius: 8px;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 8px;
              cursor: pointer;
              &:last-child {
                margin-right: 0;
              }
              &.copy-icon {
                background: rgba(78, 70, 180, 0.12);
              }
              &.transaction-icon,
              &.send-icon {
                background: transparent;
                border: 1px solid #999ca0;
              }
            }
          }
        }
      }
    }
  }
`;

export default StyledModal;
