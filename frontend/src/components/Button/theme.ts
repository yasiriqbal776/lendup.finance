import { scales, variants } from './types';

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

export const styleVariants = {
  [variants.PRIMARY]: {
    'background': 'transparent',
    'color': 'primary',
    'border': '1px solid',
    'borderColor': 'primary',
    ':hover': {
      color: 'textLink',
      background: 'transparent',
      borderColor: 'primary',
    },
    '&.button--loading:disabled': {
      opacity: 1,
      color: 'transparent',
    },
  },
  [variants.SECONDARY]: {
    'backgroundColor': 'backgroundSubtle',
    'color': 'primary',
    ':hover': {
      backgroundColor: 'backgroundLight',
      boxShadow: '0px 4px 24px rgba(255, 255, 255, 0.2)',
      color: 'text',
    },
    '&.button--loading:disabled': {
      opacity: 1,
      color: 'transparent',
      backgroundColor: 'backgroundLight',
    },
  },
  [variants.TERTIARY]: {
    'background': 'transparent',
    'color': 'textLink',
    'border': '1px solid',
    'borderColor': 'border',
    ':hover': {
      color: 'textLink',
      background: 'transparent',
      borderColor: 'textLink',
    },
    '&.button--loading:disabled': {
      opacity: 1,
      color: 'transparent',
    },
  },
  [variants.SUBTLE]: {
    'backgroundColor': 'transparent',
    'color': 'text',
    'border': '1px solid',
    'borderColor': 'transparent',
    ':hover': {
      color: 'text',
    },
    ':active': {
      color: 'background',
    },
    ':disabled': {
      color: 'text',
    },
    '&.button--loading:disabled': {
      color: 'transparent',
      border: '1px solid',
      borderColor: 'borderColor',
    },
  },
  [variants.TAB]: {
    backgroundColor: 'textSubtle',
    color: 'backgroundLight',
  },
  [variants.DANGER]: {
    backgroundColor: 'failure',
    color: 'white',
  },
  [variants.SUCCESS]: {
    backgroundColor: 'success',
    color: 'white',
  },
  [variants.TEXT]: {
    'backgroundColor': 'transparent',
    'color': 'primary',
    'boxShadow': 'none',
    ':hover': {
      color: 'textLink',
    },
  },
  [variants.CONTAINED]: {
    'backgroundColor': 'primary',
    'color': 'background',
    ':hover': {
      backgroundColor: 'primary',
      color: 'background',
      opacity: 0.85,
    },
    '&.button--loading:disabled': {
      opacity: 1,
      color: 'background',
      backgroundColor: 'primary',
    },
  },
  [variants.FILLED]: {
    backgroundColor: 'darkBlue',
    boxShadow: 'none',
    color: 'backgroundAlt',
  },
};
