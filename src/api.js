import axios from "axios";

const API_KEY = "de9006a5c10b6461bf3f797af3e03d67"; // e.g. Visual Crossing or OpenWeather

export async function fetchWeather(location) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);

    // Extract only what we need
    const data = response.data;
    return {
      name: data.name,
      temp: data.main.temp,
      desc: data.weather[0].description,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}
