import React, { Component } from 'react';
import './App.css';
import SquareAPI from './API/';
import Map from './component/Map'

class App extends Component {
  componentDidMount(){
    SquareAPI.search({
      ll: "33.42,-111.83",
      query: 'coffee'
    }).then(results => console.log(results)),
    Map.renderMap({
      center: {lat: 33.415076, lng: -111.831389},
      zoom: 16,
      styles: styles
    }) //make map match square
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
