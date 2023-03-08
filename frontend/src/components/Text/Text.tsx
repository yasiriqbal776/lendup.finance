import styled from 'styled-components';
import { color, space, typography, variant } from 'styled-system';
import { styleVariants } from './theme';
import { TextProps, variants } from './types';

const convertRemToPx = (size: string) => {
  const number = parseFloat(size?.split('rem')[0]) * 10;
  return number + 'px';
};

const Text = styled.div<TextProps>`
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  &:hover {
    color: ${props => props.hoverColor};
  }
  ${variant({
    variants: styleVariants,
  })}
  ${space}
  ${color}
  ${typography}
  
  @media screen and (max-width: 992px) and (min-width: 767px) {
    font-size: ${props => convertRemToPx(props.mdFontSize)};
  }
  @media screen and (max-width: 576px) {
    font-size: ${props => convertRemToPx(props.smFontSize)};
  }
`;

Text.defaultProps = {
  small: false,
  variant: variants.P2,
};

export default Text;

export const TextEllipsis = styled(Text)<{
  lineClamp?: number;
  maxWidth?: string;
}>`
  width: ${({ maxWidth }) => maxWidth || '100%'};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.lineClamp ? props.lineClamp : 3)};
  line-clamp: ${props => (props.lineClamp ? props.lineClamp : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
