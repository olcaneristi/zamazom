import React from 'react';
import Lottie from 'react-lottie';
import { IconReturn } from 'assets/icons';
import { Link } from 'react-router-dom';

const NoData = ({ title, description, animation, returnPath, pathDescription }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="empty__item">
      <Lottie isClickToPauseDisabled={true} options={defaultOptions} style={{ maxWidth: 350 }} />
      <h2 className="empty__item__title">{title}</h2>
      <p className="empty__item__description">{description}</p>
      <Link to={returnPath || '/'} className="empty__item__return">
        {pathDescription || 'Return to Home'}
        <span>
          <IconReturn width="20" height="20" background="#0071dc" color="#0071dc" />
        </span>
      </Link>
    </div>
  );
};

export default NoData;
