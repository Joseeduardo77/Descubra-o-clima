import React, { useState } from "react";
import "./index.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const API_KEY = "89a2579417df0efb16c79308a67480ae"; // <--- coloque sua chave da OpenWeatherMap

  const fetchWeather = async () => {
    if (city === "") return;
    try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
);

      if (!res.ok) {
        throw new Error("Cidade não encontrada");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h1>Descubra o Clima</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite a cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Buscar</button>
      </div>

      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App
