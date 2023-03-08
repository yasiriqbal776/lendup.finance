import { variants } from './types';

export const styleVariants = {
  [variants.H1]: {
    'fontSize': '64px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 992px)': { fontSize: '48px' },
    '@media screen and (max-width: 768px)': { fontSize: '36px' },
    '@media screen and (max-width: 576px)': { fontSize: '32px' },
  },
  [variants.H2]: {
    'fontSize': '48px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 992px)': { fontSize: '36px' },
    '@media screen and (max-width: 768px)': { fontSize: '32px' },
    '@media screen and (max-width: 576px)': { fontSize: '24px' },
  },
  [variants.H3]: {
    'fontSize': '36px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 992px)': { fontSize: '32px' },
    '@media screen and (max-width: 768px)': { fontSize: '24px' },
    '@media screen and (max-width: 576px)': { fontSize: '20px' },
  },
  [variants.H4]: {
    'fontSize': '32px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 992px)': { fontSize: '24px' },
    '@media screen and (max-width: 768px)': { fontSize: '20px' },
    '@media screen and (max-width: 576px)': { fontSize: '16px' },
  },
  [variants.H5]: {
    'fontSize': '24px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 992px)': { fontSize: '20px' },
    '@media screen and (max-width: 576px)': { fontSize: '16px' },
  },
  [variants.H6]: {
    'fontSize': '20px',
    'fontWeight': '700',
    'color': 'text',
    '@media screen and (max-width: 576px)': { fontSize: '16px' },
  },
  [variants.H7]: {
    fontSize: '14px',
    fontWeight: '700',
    color: 'text',
  },
  [variants.H8]: {
    fontSize: '12px',
    fontWeight: '700',
    color: 'text',
  },
  [variants.P1]: {
    'fontSize': '24px',
    'color': 'textLight',
    '@media screen and (max-width: 992px)': { fontSize: '20px' },
    '@media screen and (max-width: 768px)': { fontSize: '18px' },
    '@media screen and (max-width: 576px)': { fontSize: '16px' },
  },
  [variants.P2]: {
    'fontSize': '20px',
    'color': 'textLight',
    '@media screen and (max-width: 992px)': { fontSize: '18px' },
    '@media screen and (max-width: 576px)': { fontSize: '16px' },
  },
  [variants.P3]: {
    'fontSize': '18px',
    'color': 'textLight',
    '@media screen and (max-width: 992px)': { fontSize: '16px' },
    '@media screen and (max-width: 576px)': { fontSize: '14px' },
  },
  [variants.P4]: {
    'fontSize': '16px',
    'color': 'textLight',
    '@media screen and (max-width: 576px)': { fontSize: '14px' },
  },
  [variants.P5]: {
    'fontSize': '14px',
    'color': 'textLight',
    '@media screen and (max-width: 576px)': { fontSize: '12px' },
  },
  [variants.P6]: {
    fontSize: '12px',
    color: 'textLight',
  },
  [variants.P7]: {
    fontSize: '11px',
    color: 'textLight',
  },
};
