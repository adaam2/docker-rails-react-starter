import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} />
          <h1>
            Docker + React + Rails starter kit
          </h1>
        </header>

        <div className="Info">
          <p>
            Welcome to the starter kit!
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
