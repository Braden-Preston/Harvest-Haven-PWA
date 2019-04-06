import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  runFetch() {
    fetch('/test').then((response) => {
      console.log(response)
      console.log(response.body)
      console.log(`Fetch --> Response: ${response.body}`)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.runFetch}>Fetch</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
