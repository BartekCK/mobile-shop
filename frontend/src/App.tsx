import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import IndexPage from './pages/index';
import SuccessPage from './pages/success';
import CancelPage from './pages/cancel';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
        <Route path="/cancel">
          <CancelPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
