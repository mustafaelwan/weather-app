import React, { useEffect, useState } from "react";

import axios from "axios";
import CurrentWeather from "./components /CurrentWeather/current-weather";
import { Forecast } from "./components /Forecast/forecast";

function App() {
  const [location, setLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const currentWeatherFetch = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4ec7eb5e2ade68914609e76fa42f0273`;
  const forecastWeatherFetch = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4ec7eb5e2ade68914609e76fa42f0273`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      await axios
        .all([axios.get(currentWeatherFetch), axios.get(forecastWeatherFetch)])
        .then(
          axios.spread((currentWeatherFetch, forecastWeatherFetch) => {
            console.log(currentWeatherFetch.data, forecastWeatherFetch.data);
            setCurrentWeather(currentWeatherFetch.data);

            setForecast(forecastWeatherFetch.data);
          })
        )
        .catch((error) => console.log(error));

      setLocation("");
    }
  };
  
// const setWeatherStatus= ([weather])=>{
// setCurrentWeather(weather)
// setForecast(weather)
// localStorage.setItem('STORED_WEATHER_STATUS', JSON.stringify(weather))
// }
// const storedWeatherStatus= ()=>{
//  const stored =  localStorage.getItem('STORED_WEATHER_STATUS')
//   if(stored) {
//     setCurrentWeather(JSON.parse(stored))
//     setForecast(JSON.parse(stored))
//   }
// }
// useEffect(()=>{
//   storedWeatherStatus()
// },[])

  return (
    <div className="container">
      <div>
        <CurrentWeather
          data={currentWeather}
          setLocation={setLocation}
          location={location}
          searchLocation={searchLocation}
        />
      </div>
      <div>
        <Forecast data={forecast} />
      </div>
    </div>
  );
}

export default App;
