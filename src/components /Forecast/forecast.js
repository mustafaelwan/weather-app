import React from "react";

import "./forecast.css";
export const Forecast = ({ data }) => {
  const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className="secondary-container">
      <div className="top">
        {data.list?.slice(0, 5).map((item, idx) => (
          <div className="forecast-container">
            <label className="day">{forecastDays[idx]}</label>
            <div className="img-container">
              <img
                src={`icons/${item.weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
            </div>
            <label className="min-max">
              {Math.round(item.main.temp_max)}°C /{" "}
              {Math.round(item.main.temp_min)}°C
            </label>
          </div>
        ))}
      </div>
      <div className="bottom">
        <h1> Today’s Hightlights </h1>
        <div className="weather-desc">
          <div className="daily-details">
            <label className="content">Wind status:</label>
            {data.list ? (
              <label className="status">{data.list[0].wind.speed}mph</label>
            ) : null}
          </div>
          <div className="daily-details">
            <label className="content">Humidity:</label>
            {data.list ? (
              <label className="status">{data.list[0].main.humidity}%</label>
            ) : null}
          </div>
          <div className="daily-details">
            <label className="content">visibility:</label>
            {data.list ? (
              <label className="status">
                {(data.list[0].visibility / 1609).toFixed(2)} miles
              </label>
            ) : null}
          </div>
          <div className="daily-details">
            <label className="content">Air Pressure:</label>
            {data.list ? (
              <label className="status">{data.list[0].main.pressure} mb</label>
            ) : null}
          </div>
        </div>
      </div>
      <footer>
        created by{" "}
        <a
          href="https://github.com/mustafaelwan"
          target="_blank"
          rel="noreferrer"
        >
          mustafaelwan
        </a>{" "}
        - devChallenges.io
      </footer>
    </div>
  );
};
export default Forecast;
