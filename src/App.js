import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationForm from './LocationForm';
import MyChart from './MyChart';

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";




export default class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    pressure: undefined,
    temp_min: undefined,
    temp_max: undefined
  }

  getWeather = async (e) => {
    this.setState({
      temperature: undefined,
      city: undefined,
      humidity: undefined,
      pressure: undefined,
      temp_min: undefined,
      temp_max: undefined
    })
    const latitude = e.target.elements.latitude.value;
    const longitude = e.target.elements.longitude.value;
    const city = e.target.elements.city.value;
    e.preventDefault();
    let request = "";
    if(city) {
      request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&appid=${Api_Key}`);
    } else if(latitude && longitude) {
      request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&&units=imperial&appid=${Api_Key}`);
    }
    const response = await request.json();
    console.log(response);
    this.setState({
      temperature: response.main.temp,
      hightemperature: response.main.temp,
      city: response.name,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      temp_min: response.main.temp_min,
      temp_max: response.main.temp_max
    })
  }
  render() { 
    return (
      <div className="App">
          <LocationForm loadWeatherData={this.getWeather} />
          {
              this.state.city && <div>Weather today in 
                  <span>  {this.state.city} </span> 
                  <MyChart temperature={this.state.temperature} high={this.state.temp_max} low={this.state.temp_min} 
                  humidity={this.state.humidity} pressure={this.state.pressure} />                   
              </div> 
          }

      </div>
    );
  }
}
