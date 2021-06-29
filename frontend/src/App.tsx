import React from 'react';

// containers
import GridCard from './containers/grid-card';
import Navigation from './containers/navigation';

// store
import { Provider } from 'react-redux';
import { store } from './core/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <GridCard />
    </Provider>
  );
}

export default App;
