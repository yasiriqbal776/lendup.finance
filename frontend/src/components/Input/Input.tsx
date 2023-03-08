import * as React from 'react';
// import { CSS, styled, VariantProps } from '@tote/ui'
import clsx from 'clsx';
import styled from 'styled-components';
import { variant } from 'styled-system';
export const scales = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;
export type Scale = (typeof scales)[keyof typeof scales];

export const scaleVariants = {
  [scales.LG]: {
    height: '4.8rem',
    padding: '16px 24px',
    fontSize: '16px',
  },
  [scales.MD]: {
    padding: '9px 12px',
    fontSize: '14px',
  },
  [scales.SM]: {
    height: '40px',
    padding: '12px 16px',
    fontSize: '14px',
  },
  [scales.XS]: {
    height: '20px',
    fontSize: '12px',
    padding: '0 8px',
  },
};

const InputGroup = styled.div<{ size: Scale }>`
  position: relative;
  display: flex;
  font-size: 16px;
  align-items: center;
  ${variant({
    prop: 'size',
    variants: scaleVariants,
  })};
`;
// , {
//   '$$inputBorderRadius': '$radii$6',
//   '$$inputBorderColor': '$colors$inputBorderColor',
//   '$$inputPaddingInline': '$space$10 $space$14',
//   '$$focusBorderColor': '$colors$inputBorderColor',
//   '$$errorBorderColor': '$colors$errorColor',
//   '$$placeholderColor': '$colors$inputPlaceHolderColor',
//   '$$inputCustomBgColor': '$colors$inputBackgroundColor',
//   '$$inputHeight': '$heights$44',

//   '::-webkit-calendar-picker-indicator': {
//     filter: 'invert(.6) !important',
//   },
//   'variants': {
//     size: {
//       sm: {
//         fontSize: '15px',
//         height: '36px',
//         $$inputHeight: '36px',
//         $$contentSize: '$space$8',
//         $$inputBorderRadius: '$radii$sm',
//         $$inputPaddingInline: '$space$3',
//       },
//       md: {
//         $$contentSize: '$space$10',
//         // $$inputCustomBgColor : "$$inputCustomBgColor",
//       },
//       lg: {
//         fontSize: '$lg',
//         height: '$12',
//         $$contentSize: '$space$12',
//       },
//     },
//   },
//   'defaultVariants': {
//     size: 'md',
//   },
// })

export const StyledInput = styled.input`
  position: relative;
  appearance: none;
  margin: 0;
  height': 100%;
  width': 100%;
  min-width: 0;
  outline: none; // mayabe make this global reset?
  padding: 8px 16px;
  //   webkittaphighlightcolor: rgba(0, 0, 0, 0);
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  transition-duration': 200ms;
  line-height': 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textLink};
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.textLink};
  }
  &:disabled,
  &[data-disabled] {
    pointer-events: none;
    opacity: 0.4;
  }
  &.has-content--left {
    padding-inline-start: 42px;
  }
  &.has-content--right {
    padding-inline-end: 42px;
  }
`;
//   'variants': {
//     variant: {
//       outline: {},
//       filled: {},
//       default: {
//         height: '$$inputHeight',
//       },
//     },
//     invalid: {
//       true: {
//         'borderWidth': '1px',
//         'borderColor': '$$errorBorderColor',
//         '&:hover': {
//           borderColor: '$$errorBorderColor',
//         },
//       },
//     },
//   },
//   'defaultVariants': {
//     variant: 'default',
//   },
// })

const InputElement = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  &.input-content--left {
    left: 14px;
  }
  &.input-content--right {
    right: 14px;
  }
`;

type InputProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> & {
  size?: Scale;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  contentClickable?: boolean;
};

export const Input = React.forwardRef<React.ElementRef<'input'>, InputProps>((props, forwardedRef) => {
  const { size, contentLeft, contentRight, ...rest } = props;

  const inputClassName = clsx({
    'has-content--right': !!contentRight,
    'has-content--left': !!contentLeft,
  });

  return (
    <InputGroup size={size}>
      {contentLeft && <InputElement className="input-content--left">{contentLeft}</InputElement>}
      <StyledInput ref={forwardedRef} className={inputClassName} {...rest} />
      {contentRight && <InputElement className="input-content--right">{contentRight}</InputElement>}
    </InputGroup>
  );
});

Input.displayName = 'Input';
