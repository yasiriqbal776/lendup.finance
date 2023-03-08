import { SpaceProps, TypographyProps } from 'styled-system';

export const variants = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  H7: 'h7',
  H8: 'h8',
  P1: 'p1',
  P2: 'p2',
  P3: 'p3',
  P4: 'p4',
  P5: 'p5',
  P6: 'p6',
  P7: 'p7',
} as const;
export type Variant = (typeof variants)[keyof typeof variants];
export interface TextProps extends SpaceProps, TypographyProps {
  hoverColor?: string;
  bold?: boolean;
  small?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  smFontSize?: string;
  mdFontSize?: string;
  variant?: Variant;
}
