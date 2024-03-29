import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Terminal } from "./components/Terminal";

class App extends Component {

  render() {


    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React.js</h2>
        </div>
        <p className="App-intro container">
          <div className="row">
            <Terminal kafkaTopic="transformedDataTopic" />
          </div>

        </p>
      </div>
    );
  }
}

export default App;
