
import React, { useState, useEffect } from 'react';

function MyTown() {
  const [weatherData, setData] = useState(null);
  const [isFH, setTemp] = useState(false);

  useEffect(() => {
    const apiKey = '592ae3fb37d427d90d4fe1e38aa5e2e3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Halifax&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);


  const getImage = (temperature) => {
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
    setTemp(!isFH);
  };

  return (
    <div className="page-container">
      <h1>I live in Halifax, NS</h1>
      <p>Halifax is a vibrant coastal city in Nova Scotia, Canada, known for its rich maritime heritage. With a picturesque waterfront, historic sites, and a lively arts scene, Halifax offers a blend of history and modern charm. Visitors can explore the iconic Citadel Hill, enjoy fresh seafood at the bustling harbor, and experience the warmth of its friendly residents. The city's cultural diversity and stunning natural surroundings, including the scenic Peggy's Cove, make Halifax a delightful destination for travelers.</p>
      <img className="town-image" src="/images/mytown.jpg"  />
      {weatherData && (
        <div>
          <img className="town-image"
            src={`/images/${getImage(weatherData.main.temp)}`}
          />
          <p> Temperature: {isFH
              ? `${toFahrenheit(weatherData.main.temp)}°F`
              : `${weatherData.main.temp}°C`}</p>

          <button onClick={toggleTemperatureUnit}>
            Change to {isFH ? '°C' : '°F'}
          </button>
        </div>
      )}
    </div>
  );
}

export default MyTown;