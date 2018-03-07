import React from 'react';
import { connect }  from 'react-redux';
import { loadApp, checkApiStatus } from '../actions/app';
import * as AppSelectors from '../selectors/app';

// eslint-disable-next-line
import styles from './app.css';

type Props = {
  dispatch: () => void,
  loaded: boolean,
  children: array
}

class App extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.dispatch(loadApp());
    this.props.dispatch(checkApiStatus());
  }

  render() {
    if (!this.props.loaded) {
      return (
        <div>
          Loading..
        </div>
      );
    }

    return (
      <div className="App">
        <header>
          <h1 className="Brand">React + Redux + Rails + Docker Compose</h1>

          <p>
            With redux, thunk actions, redux action logging
          </p>

          <p>API Status:
            <span className="StatusPill">
              {this.props.apiStatus}
            </span>
          </p>
        </header>

        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default connect((store, props) => {
  return {
    loaded: AppSelectors.getLoadedStatus(store),
    apiStatus: AppSelectors.getApiStatus(store)
  };
})(App);