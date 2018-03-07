import React from 'react';
import { connect }  from 'react-redux';
import { loadApp } from '../actions/app';

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
    loaded: store.app.loaded
  };
})(App);