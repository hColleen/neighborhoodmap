import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SquareAPI from './API/';

class App extends Component {
  componentDidMount(){
    SquareAPI.search({
      ll: "33.42,-111.83",
      query: 'coffee'
    }).then(results => console.log(results))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
