var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>it is {temp} degress Celcius in {location}</h3>
  )
};

module.exports = WeatherMessage;
