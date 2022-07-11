import * as React from 'react';

const IconStar = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width || 16}
    height={props?.height || 16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#FFD055"
      d="M6 0c.22 0 .416.148.486.366l1.207 3.772 3.799.035c.22.003.415.152.483.371a.551.551 0 0 1-.183.598L8.74 7.508l1.141 3.794a.549.549 0 0 1-.187.595.497.497 0 0 1-.6.003L6 9.592 2.906 11.9a.497.497 0 0 1-.599-.003.551.551 0 0 1-.187-.595l1.14-3.794L.208 5.142a.551.551 0 0 1-.183-.598.516.516 0 0 1 .483-.37l3.8-.036L5.513.366A.515.515 0 0 1 6 0z"
    />
  </svg>
);

export default IconStar;
