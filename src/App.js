import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationForm from './LocationForm'

const Api_Key = "2fc94e6f161976c8d4b98ce385cc29f4";

export default class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${Api_Key}`);   
    const response = await request.json();
    console.log(response);
  }
  render() { 
    return (
      <div className="App">
          <LocationForm loadWeatherData={this.getWeather} />
      </div>
    );
  }
}
