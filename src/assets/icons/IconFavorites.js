import * as React from 'react';

const SvgComponent = props => (
  <svg
    width={props?.width || 64}
    height={props?.height || 64}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      d="M55.5 24.5A12 12 0 0 0 32 21.09 12 12 0 1 0 11.57 32.5h-.07l.38.34A11.94 11.94 0 0 0 13.19 34l19.7 17.5 19.61-19h-.07a12 12 0 0 0 3.07-8Z"
      style={{
        fill: props?.fill || 'transparent',
        stroke: props?.color || '#FFF',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: props?.strokeWidth || 5.5,
      }}
    />
  </svg>
);

export default SvgComponent;
