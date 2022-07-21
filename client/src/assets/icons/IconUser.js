import * as React from 'react';

const IconUser = props => (
  <svg
    stroke={props?.color || 'currentColor'}
    fill="none"
    strokeWidth={2}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height={props?.height || '1em'}
    width={props?.width || '1em'}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx={12} cy={7} r={4} />
  </svg>
);

export default IconUser;
