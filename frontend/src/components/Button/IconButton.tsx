import styled from 'styled-components';
import Button from './Button';
import { BaseButtonProps, PolymorphicComponent, scales } from './types';

const scaleVariants = {
  [scales.LG]: '48px',
  [scales.MD]: '40px',
  [scales.SM]: '32px',
};

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(Button)<BaseButtonProps>`
  padding: 0;
  min-width: ${({ scale }) => scaleVariants[scale ?? scales.MD]};
  min-height: ${({ scale }) => scaleVariants[scale ?? scales.MD]};
`;

export default IconButton;
