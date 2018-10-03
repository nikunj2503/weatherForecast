import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp );
    const pressures = cityData.list.map(weather => weather.main.pressure );
    const humidities = cityData.list.map(weather => weather.main.humidity );
    const { lon, lat } = cityData.city.coord;

    console.log(temps);
    console.log(lat);
    console.log(lon);
    return (
      <tr key={ name }>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    )
  }

  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody> 
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStatesToProps({weather}) {
  // {weather above means const weather = state.weather}
  return { weather } ; // { weather } = { weather : weather }; i.e Key and Value having the same name. ES6 feature
}

export default connect(mapStatesToProps)(WeatherList);