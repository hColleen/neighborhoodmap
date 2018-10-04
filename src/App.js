import React, { Component } from 'react';
import './App.css';
import SquareAPI from './API/';
import Map from './component/Map'

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
        <Map />
      </div>
    );
  }
}

export default App;
