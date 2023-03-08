import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.7993 5.80036C15.1248 5.80036 16.1993 4.72587 16.1993 3.40042C16.1993 2.07498 15.1248 1.00049 13.7993 1.00049C12.4739 1.00049 11.3994 2.07498 11.3994 3.40042C11.3994 4.72587 12.4739 5.80036 13.7993 5.80036Z"
        stroke={props?.fill || '#242C33'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M4.20023 11.4006C5.52568 11.4006 6.60016 10.3261 6.60016 9.00064C6.60016 7.6752 5.52568 6.60071 4.20023 6.60071C2.87478 6.60071 1.80029 7.6752 1.80029 9.00064C1.80029 10.3261 2.87478 11.4006 4.20023 11.4006Z"
        stroke={props?.fill || '#242C33'}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7993 16.9999C15.1248 16.9999 16.1993 15.9255 16.1993 14.6C16.1993 13.2746 15.1248 12.2001 13.7993 12.2001C12.4739 12.2001 11.3994 13.2746 11.3994 14.6C11.3994 15.9255 12.4739 16.9999 13.7993 16.9999Z"
        stroke={props?.fill || '#242C33'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M6.27197 10.2076L11.7358 13.3916" stroke={props?.fill || '#242C33'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.7278 4.60828L6.27197 7.79219" stroke={props?.fill || '#242C33'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
