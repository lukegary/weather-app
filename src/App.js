import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocationForm from './LocationForm'

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

export default class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const latitude = e.target.elements.latitude.value;
    const longitude = e.target.elements.longitude.value;
    const city = e.target.elements.city.value;

    if(latitude && longitude) {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api_Key}`);
      const response = await request.json();
      console.log(response);
    } else if(city) {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${Api_Key}`);
      const response = await request.json();
      console.log(response);
    }

  }
  render() { 
    return (
      <div className="App">
          <LocationForm loadWeatherData={this.getWeather} />
      </div>
    );
  }
}
