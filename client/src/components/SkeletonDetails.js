import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonDetails = props => {
  return (
    <ContentLoader viewBox="0 0 1200 500" height={500} width={1200} {...props}>
      <rect x="0" y="0" rx="8" ry="8" width="600" height="400" />
      <rect x="113" y="425" rx="8" ry="8" width="70" height="60" />
      <rect x="213" y="425" rx="8" ry="8" width="70" height="60" />
      <rect x="313" y="425" rx="8" ry="8" width="70" height="60" />
      <rect x="413" y="425" rx="8" ry="8" width="70" height="60" />

      <rect x="650" y="18" rx="6" ry="6" width="350" height="30" />
      <rect x="650" y="58" rx="6" ry="6" width="80" height="17" />

      <rect x="650" y="118" rx="6" ry="6" width="110" height="22" />

      <rect x="1055" y="118" rx="6" ry="6" width="120" height="22" />
      <rect x="1085" y="148" rx="6" ry="6" width="60" height="10" />

      <rect x="194" y="329" rx="0" ry="0" width="0" height="0" />
      <rect x="192" y="323" rx="0" ry="0" width="0" height="0" />
      <rect x="185" y="323" rx="0" ry="0" width="0" height="0" />

      <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
      <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />

      <rect x="650" y="229" rx="8" ry="8" width="90" height="90" />
      <rect x="760" y="229" rx="8" ry="8" width="90" height="90" />

      <rect x="650" y="359" rx="6" ry="6" width="425" height="42" />

      <rect x="1090" y="359" rx="6" ry="6" width="80" height="42" />
    </ContentLoader>
  );
};

export default SkeletonDetails;
