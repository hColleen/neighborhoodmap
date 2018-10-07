import React, { Component } from 'react';
import './App.css';
import SquareAPI from './API/';
import Map from './component/Map'

class App extends Component {

  constructor(){
    super();
    this.state = {
      venues: [],
      markers: []
    }
  }

  componentDidMount(){
    SquareAPI.search({
      ll: "33.42,-111.83",
      query: 'coffee'
    }).then(results =>{
      const { venues } = results.response;
      const { markers } = venues.map(venue => {
        return{
            lat: venue.location.lat,
            lng: venue.location.lng,
            title: venue.name,
            isOpen: false,
            isVisible: true
            }
        })
        this.setState({ venues, markers })
        console.log(results)
      }).catch(error => {
        alert('FourSquare API Failed. Please check connection and try again')
      })
 }
  
  render() {
    return (
      <div className="App">
        <Map {...this.state } />
      </div>
    );
  }
}

export default App;
