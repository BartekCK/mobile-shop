import React from 'react';

// containers
import GridCard from './containers/grid-card';
import Navigation from './containers/navigation';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <GridCard />
    </React.Fragment>
  );
}

export default App;
