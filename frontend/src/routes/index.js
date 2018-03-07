import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';

// Layouts
import App from '../containers/app';

// Components
import Test from '../components/sample';

const routes = (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Test} />
      </Switch>
    </App>
  </ConnectedRouter>
);

export default routes;