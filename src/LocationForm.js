import React from 'react';

const LocationForm = (props) => {
	return (
	  <form onSubmit={props.loadWeatherData}>
	    <input type="text" name="city" placeholder="City..." />
	    <p>or</p>
	    <input type="number" name="latitude" placeholder="Latitude" step="0.001" />
	    <input type="number" name="longitude" placeholder="Longitude" step="0.001" />
	    <button>Search</button>
	  </form>
	)
}
export default LocationForm;