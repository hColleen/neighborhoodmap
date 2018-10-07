import React, { Component } from 'react';

class Map extends Component{

    componentDidMount() {
        this.renderMap()
    }

    renderMap = () =>{
            loadMapAPI("https://maps.googleapis.com/maps/api/js?key=AIzaSyCnPeVOPbLkPtwjEbH9MKDppTkoFSVmKdA&callback=initMap")
            window.initMap = this.initMap
        }

    initMap = () => {
            const styles = [{"featureType": "all", "elementType": "all", "stylers": [{"hue": "#0000b0"},{"invert_lightness": "true"},{"saturation": -30}]}]
            const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.415076, lng: -111.831389},
            zoom: 16,
            styles: styles
            })
            const marker = new window.google.maps.Marker
        }

    render(){
        return(
            <div id = "map" role = "application" aria-label = "map" tabIndex = "-1"></div>
        )
    }
}

function loadMapAPI(url){
    let index = window.document.getElementsByTagName('script')[0]
    let script = window.document.createElement('script')
    script.src = url
    script.asynch = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

  export default Map;