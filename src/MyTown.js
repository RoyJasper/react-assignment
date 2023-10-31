import React, { useState, useEffect } from 'react';

function MyTown() {
  const [weatherData, setWeatherData] = useState(null);
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'YOUR_API_KEY';
    const city = 'Your Town'; // Replace with your town's name or city
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  // Function to determine the weather image based on temperature
  const getWeatherImage = (temperature) => {
    if (temperature <= 10) {
      return 'cold.png';
    } else if (temperature > 10 && temperature < 20) {
      return 'mild.png';
    } else {
      return 'sunny.png';
    }
  };

  const toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  const toggleTemperatureUnit = () => {
    setIsFahrenheit(!isFahrenheit);
  };

  return (
    <div className="page-container">
      <h1>I live in Your Town</h1>
      {weatherData && (
        <div>
          <h1>I live in Halifax, Nova Scotia, Canada.</h1>
            <img src="\images\mytown.jpg" alt="Your Town" />
          <img
            src={`/images/${getWeatherImage(weatherData.main.temp)}`}
            alt="Weather"
          />
<p>
            Temperature: {isFahrenheit
              ? `${toFahrenheit(weatherData.main.temp)}°F`
              : `${weatherData.main.temp}°C`}
          </p>
          <button onClick={toggleTemperatureUnit}>
            Change to {isFahrenheit ? '°C' : '°F'}
          </button>
        </div>
      )}
    </div>
  );
}

export default MyTown;
