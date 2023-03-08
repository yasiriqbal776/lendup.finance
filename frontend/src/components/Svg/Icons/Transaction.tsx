import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Copy: React.FC<SvgProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 11L19 5" stroke="#0062FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 8V4H16" stroke="#0062FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M11.2 4H9.6C5.6 4 4 5.6 4 9.6V14.4C4 18.4 5.6 20 9.6 20H14.4C18.4 20 20 18.4 20 14.4V12.8"
        stroke="#0062FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Copy;
