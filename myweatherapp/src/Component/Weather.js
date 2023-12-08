import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';

export class Weather extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lat:'',
         lon:'',
         weatherData:null,
         city:'',
      }
    }
    
  render() {
    return (
      <div>
        <Search 
        lat={this.state.lat} 
        lon={this.state.lon} 
        city={this.state.city} 
        weatherData={this.setState.weatherData} />
        <Result />
      </div>
    )
  }
}

export default Weather
