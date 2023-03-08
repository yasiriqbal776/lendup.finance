import Svg from '../Svg';
import { SvgProps } from '../types';

const Filter: React.FC<SvgProps> = props => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke={props.fill || '#344054'} strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Filter;
