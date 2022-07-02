import * as React from 'react';

const IconPlus = props => (
  <svg
    width={props?.width || 34}
    height={props?.height || 34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    viewBox="0 0 34 34"
  >
    <path
      d="M33.5 17c0 9.113-7.387 16.5-16.5 16.5S.5 26.113.5 17 7.887.5 17 .5 33.5 7.887 33.5 17Z"
      stroke="#DDD"
    />
    <path
      d="M17 11v12M23 17H11"
      stroke="#0071DC"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconPlus;
