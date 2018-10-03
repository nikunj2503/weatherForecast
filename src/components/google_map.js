import React, { Component } from 'react';

class GoogleMap extends Component {
  //componentDidMount() :- 
  //lifecycle method that gets called automatically after this component has been rendered on the page/screen
  componentDidMount() {
    //Used for creating a new embeded map on the page
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render() {
    //ref system in react allows us to get a reference to an html element that has been rendered on the page
    return <div ref="map" />;
  }
  
}

export default GoogleMap;