import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<SvgProps> = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_29_3242)">
        <path
          d="M3.89841 17.3566C4.04324 17.2117 4.24239 17.1273 4.4536 17.1273H23.6077C23.9578 17.1273 24.1328 17.5497 23.8853 17.7971L20.1016 21.5809C19.9567 21.7257 19.7576 21.8102 19.5464 21.8102H0.392251C0.0422387 21.8102 -0.132768 21.3878 0.114655 21.1403L3.89841 17.3566Z"
          fill="url(#paint0_linear_29_3242)"
        />
        <path
          d="M3.89853 3.22932C4.0494 3.08449 4.24855 3 4.45373 3H23.6079C23.9579 3 24.1329 3.42243 23.8855 3.66985L20.1017 7.45361C19.9569 7.59844 19.7577 7.68293 19.5465 7.68293H0.392373C0.0423607 7.68293 -0.132646 7.2605 0.114777 7.01308L3.89853 3.22932Z"
          fill="url(#paint1_linear_29_3242)"
        />
        <path
          d="M20.1016 10.2477C19.9567 10.1029 19.7576 10.0184 19.5464 10.0184H0.392251C0.0422387 10.0184 -0.132768 10.4408 0.114655 10.6882L3.89841 14.472C4.04324 14.6168 4.24239 14.7013 4.4536 14.7013H23.6077C23.9578 14.7013 24.1328 14.2789 23.8853 14.0314L20.1016 10.2477Z"
          fill="url(#paint2_linear_29_3242)"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_29_3242" x1="21.778" y1="0.739709" x2="8.52177" y2="26.1306" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient id="paint1_linear_29_3242" x1="15.9818" y1="-2.28648" x2="2.72556" y2="23.1044" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient id="paint2_linear_29_3242" x1="18.8613" y1="-0.783015" x2="5.60515" y2="24.6079" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <clipPath id="clip0_29_3242">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
