import styled from 'styled-components';
import { background, border, layout, position, space, zIndex } from 'styled-system';
import { BoxProps } from './types';

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${zIndex}
`;

export default Box;
