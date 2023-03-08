import styled, { DefaultTheme } from 'styled-components';
import { space, layout, variant, color, border, typography } from 'styled-system';
import { scaleVariants, styleVariants } from './theme';
import { BaseButtonProps } from './types';

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
}

const getDisabledStyles = ({ $isLoading }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
      &.button--loading {
        position: relative;
        color: transparent;
        .loader {
          position: absolute;
        }
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      box-shadow: none;
      cursor: not-allowed;
      opacity: 0.3;
    }
  `;
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? '.5' : '1';
};

const StyledButton = styled.button<BaseButtonProps>`
  align-items: center;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  justify-content: center;
  letter-spacing: 0.02em;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;
  text-decoration: none;
  min-width: max-content;
  &:active {
    color: ${props => props.theme.colors.background};
  }

  &:hover:not(:disabled):not(.button--disabled):not(.button--disabled):not(:active) {
    // opacity: 0.65;
    // color: ${props => props.theme.colors.background};
  }

  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {
    opacity: 0.7;
    // transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${layout}
  ${space}
  ${color}
  ${border}
  ${typography}
`;
export default StyledButton;
