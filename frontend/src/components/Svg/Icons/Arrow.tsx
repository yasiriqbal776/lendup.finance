import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Arrow: React.FC<SvgProps> = props => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.0467 6.38L8.00001 2.33334L3.95334 6.38" stroke="#24CA49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 13.6667V2.44667" stroke="#24CA49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>
  );
};

export default Arrow;
