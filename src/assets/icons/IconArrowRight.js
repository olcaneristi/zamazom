import * as React from 'react';

const IconArrowRight = props => (
  <svg
    width={props?.width || 24}
    height={props?.height || 24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06L14.94 12 9.47 6.53a.75.75 0 0 1 0-1.06Z"
      fill={props?.color || '#030D45'}
    />
  </svg>
);

export default IconArrowRight;
