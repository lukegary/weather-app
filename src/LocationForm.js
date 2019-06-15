import React from 'react';

  window.onload = function() {
    var startPos;
    var geoSuccess = function(position) {
      startPos = position;
      document.getElementById('startLat').value = startPos.coords.latitude.toFixed(3);
      document.getElementById('startLon').value = startPos.coords.longitude.toFixed(3);
      document.getElementById('searchButton').click();
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  };


const LocationForm = (props) => {
	return (
	  <form onSubmit={props.loadWeatherData}>
	    <input type="text" name="city" placeholder="City..."  />
	    <p>or</p>
	    <input type="number" name="latitude" placeholder="Latitude" step="0.0001" id="startLat" />
	    <input type="number" name="longitude" placeholder="Longitude" step="0.0001" id="startLon" />
	    <button id="searchButton">Search</button>
	  </form>
	)
}
export default LocationForm;