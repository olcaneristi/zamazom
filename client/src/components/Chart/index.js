import { IconStar } from 'assets/icons';
import React from 'react';

const Chart = ({ ratings }) => {
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#f0f0ea',
    borderRadius: 8,
    marginBlock: 10,
  };

  const fillerStyles = {
    height: '100%',
    width: `${ratings.value / 1.75}%`,
    backgroundColor: '#FFD055',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <div
        style={{
          marginRight: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <IconStar width="14" height="14" />
        <p style={{ textAlign: 'center', marginLeft: 1, minWidth: 15 }}>{ratings.name}</p>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <div
        style={{
          marginLeft: 5,
          display: 'flex',
          minWidth: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ textAlign: 'center' }}>{ratings.value}</p>
      </div>
    </div>
  );
};

export default Chart;
