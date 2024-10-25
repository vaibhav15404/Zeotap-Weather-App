import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from one folder up
dotenv.config({ path: "../.env" });

async function fetchWeatherData(city) {
  console.log("6a751c7af4eaa511143eb729be6a4589");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a751c7af4eaa511143eb729be6a4589`;
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
