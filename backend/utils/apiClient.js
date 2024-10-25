import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.API_KEY;

async function fetchWeatherData(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  const { data } = await axios.get(url);
  return {
    city: city,
    main: data.weather[0].main,
    temp_min: data.main.temp_min - 273.15,
    humidity: data.main.humidity, 
    wind_speed: data.wind.speed, 
    temp_max: data.main.temp_max - 273.15,
    dt: new Date(data.dt * 1000),
  };
}

export default fetchWeatherData;
