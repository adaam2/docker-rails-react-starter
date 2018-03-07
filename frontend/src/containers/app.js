import React from 'react';
import { connect }  from 'react-redux';
import { loadApp } from '../actions/app';

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
      <div>
        <header>
          <h1>Hello world</h1>
        </header>

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default connect((store, props) => {
  return {
    loaded: store.app.loaded
  };
})(App);