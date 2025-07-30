function WeatherCard({ data }) {
  return (
    <div className="card">
      <h2>{data.name}, {data.sys.country}</h2>
      <h3>{Math.round(data.main.temp)}°C</h3>
      <p>{data.weather[0].description}</p>
      <div className="details">
        <p>Sensação: {Math.round(data.main.feels_like)}°C</p>
        <p>Umidade: {data.main.humidity}%</p>
        <p>Vento: {data.wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
import React from "react";