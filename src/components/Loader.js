import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = ({ width, haveBackground }) => {
  return (
    <div
      style={{
        width: '100%',
        backgroundColor: haveBackground ? 'rgba(0,0,0,0.7)' : 'transparent',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999999,
      }}
    >
      <Oval
        ariaLabel="loading-indicator"
        width={width || 100}
        color="#0071dc"
        secondaryColor="#FFF"
        wrapperStyle={{ alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}
      />
    </div>
  );
};

export default Loader;
