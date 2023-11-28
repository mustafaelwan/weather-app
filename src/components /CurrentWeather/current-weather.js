import "./current-weather.css";
import moment from "moment";
import { IoLocationSharp } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";

const CurrentWeather = ({ searchLocation, data, location, setLocation }) => {
  return (
    <div className="main-container">
      <div className="top-container">
        <div className="location-container">
          <input
            className="input"
            placeholder="Search for places"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
          />
          <div className="location-icon">
            <button className="location-icon-btn">
              <MdMyLocation className="icon" />
            </button>
          </div>
        </div>
        <div className="image-container">
          {data.weather ? (
            <img
              className="img"
              alt="weather"
              src={`icons/${data.weather[0].icon}.png`}
            />
          ) : null}
        </div>
        <div className="temp">
          {data.main ? <h1>{Math.round(data.main.temp)}°C </h1> : null}
        </div>
      </div>
      <div className="bottom-container">
        <div className="desc">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
        </div>
        <div className="user-status">
          <div>
            <p className="current-day">{moment().format("dddd")}</p>
          </div>
          <div>
            <p className="dot">•</p>
          </div>
          <div>
            <p className="current-date">{moment().format("Do MMMM")}</p>
          </div>
        </div>
        <div className="user-location">
          <IoLocationSharp />
          <p className="city">{data.name}</p>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
