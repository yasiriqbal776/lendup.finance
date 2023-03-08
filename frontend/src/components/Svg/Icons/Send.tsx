import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Send: React.FC<SvgProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 15.7395C14.7294 18.7647 13.1143 20 9.57857 20L9.46508 20C5.5627 20 4 18.4958 4 14.7395L4 9.2605C4 5.5042 5.5627 4 9.46508 4L9.57857 4C13.0881 4 14.7032 5.21849 14.9913 8.19328"
        stroke="#40A69F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M9 12L19 12" stroke="#40A69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17 15L20 12L17 9" stroke="#40A69F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Send;
