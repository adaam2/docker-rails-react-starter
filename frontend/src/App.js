import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApiClient from './shared/api-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: undefined
    }
  }

  componentDidMount() {
    ApiClient.get('/')
      .then((response) => {
        this.setState({
          status: response.body.status
        });
      },
      (err) => {
        this.setState({
          status: "DOWN"
        });
      });
  }

  render() {
    if (!this.state.status) {
      return (null);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <h1>
            Docker + React + Rails starter kit
          </h1>
        </header>

        <div className="Info">
          <p>
            API status: <span className="Status-pill">
               {this.state.status}
            </span>
          </p>

          <p>
            Webpack configuration files are stored in:
            <br />
            <code>
              /frontend/config
            </code>
          </p>

          <p>
            There is an api client class included in:
            <br />
            <code>
              /frontend/shared
            </code>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
