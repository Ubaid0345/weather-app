import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import axios from 'axios';
import Recent from './Recent';

export class Weather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: '',
      lon: '',
      weatherData: null,
      city: '',
      isSearched: false,
      recent:[],
    }
  }

  changeHandler = (event) => {
    const name = event.target.name;
    if (name === 'city') {
      this.setState({
        city: event.target.value
      })
    }
    else if (name === 'lat') {
      this.setState({
        lat: event.target.value
      })
    }
    else if (name === 'lon') {
      this.setState({
        lon: event.target.value
      })
    }
  }

  searchHandler = () => {
    this.setState({
      lat: '',
      lon: '',
      city: '',
      isSearched:true,
      weatherData: null,
    })
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.on}&appid={API key}')
      .then((result => {
        this.state({
          city: result.data.name,
          weatherData: result.data,
        },()=>{
          this.addDataToRecent();
        });
      }))
      .catch((error => {
        console.log(error);
      }));
  }

  addDataToRecent = () => {
    console.log(this.state);
    let recent = this.state.recent;
    recent.push({
      lat: this.state.lat,
      lon: this.state.lon,
      city: this.state.city,
    })
    this.setState({recent}, ()=>{
      console.log(this.state);
    });
  }

  locationHandler = () => {
    this.setState({
      lat: '',
      lon: '',
      city: '',
      isSearched:true,
      weatherData: null,
    })
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (response) => {
          setTimeout(() => {
            this.setState({
              lat: response.coords.latitude,
              lon: response.coords.longitude,
            })
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.on}&appid={API key}')
              .then((result => {
                this.state({
                  city: result.data.name,
                  weatherData: result.data,
                }, ()=>{
                  this.addDataToRecent();
                });
              }))
              .catch((error => {
                console.log(error);
              }));
          }, 500
          )
        },
        (error) => {
          this.setState({

          })
        });
    }
    else {
      console.log('location does not supported');
    }
  }

  render() {
    return (
      <div className='container pt-4 ' style={{height: '500px'}}>
        <Recent recent={this.state.recent}  />
        <Search
          lat={this.state.lat}
          lon={this.state.lon}
          city={this.state.city}
          weatherData={this.setState.weatherData}
          change={this.changeHandler}
          getLocation={this.locationHandler}
          search = {this.searchHandler}></Search>
        <Result
          weatherData={this.state.weatherData}
          isSearched={this.state.isSearched}
           ></Result>
      </div>
    )
  }
}

export default Weather
