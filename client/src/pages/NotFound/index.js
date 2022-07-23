import { AnimatedPage, InfoContainer } from 'components';
import React from 'react';
import notFound from 'assets/lotties/not-found.json';

const NotFound = () => {
  return (
    <AnimatedPage className="not__found">
      <div className="container not__found__container">
        <InfoContainer
          animation={notFound}
          title="Whoops! Looks like you are lost!"
          description="We're sorry, the page you requested could not be found."
        />
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
