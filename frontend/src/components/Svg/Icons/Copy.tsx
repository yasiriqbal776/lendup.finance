import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Copy: React.FC<SvgProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.4663 9.80768H16.875C18.1176 9.80768 19.125 10.815 19.125 12.0577V16.875C19.125 18.1176 18.1176 19.125 16.875 19.125H12.0577C10.815 19.125 9.80768 18.1176 9.80768 16.875V14.4663M7.125 14.1923H11.9423C13.1849 14.1923 14.1923 13.1849 14.1923 11.9423V7.125C14.1923 5.88236 13.1849 4.875 11.9423 4.875H7.125C5.88236 4.875 4.875 5.88236 4.875 7.125V11.9423C4.875 13.1849 5.88236 14.1923 7.125 14.1923Z"
        stroke="#0062FF"
        stroke-width="1.5"
      />
    </Svg>
  );
};

export default Copy;
