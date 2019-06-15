import React from 'react';
const Api_Key = "2fc94e6f161976c8d4b98ce385cc29f4";
const LocationForm = (props) => {
	return (
	  <form onSubmit={props.loadWeatherData}>
	    <input type="text" name="city" placeholder="City..." />
	    <p>or</p>
	    <input type="number" name="latitude" placeholder="Latitude" step="0.001" />
	    <input type="number" name="logitutde" placeholder="Longitude" step="0.001" />
	    <button>Search</button>
	  </form>
	)
}
export default LocationForm;