import * as React from 'react';

const IconBurger = props => (
  <svg
    width={props?.width || 48}
    height={props?.height || 48}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      d="M41 14H7a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4ZM41 26H7a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4ZM41 38H7a2 2 0 0 1 0-4h34a2 2 0 0 1 0 4Z"
      fill={props?.color || '#6f7380'}
    />
  </svg>
);

export default IconBurger;
