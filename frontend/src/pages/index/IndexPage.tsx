import React from 'react';

// containers
import Navigation from '../../containers/navigation';
import GridCard from '../../containers/grid-card';

const IndexPage: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <GridCard />
    </React.Fragment>
  );
};

export default IndexPage
