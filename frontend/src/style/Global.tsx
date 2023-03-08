import { ApplicationTheme } from '@/theme';
import { Inter } from 'next/font/google';
import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ApplicationTheme {}
}

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${inter.style.fontFamily};
  }
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`;

export default GlobalStyle;
