import "./style.css";
import { fetchWeather } from "./api.js";

const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location");
const weatherInfo = document.getElementById("weather-info");
const loading = document.getElementById("loading");

form.addEventListener("submit", async (e) => {
    console.log("Form submitted");
  e.preventDefault();
  const location = locationInput.value.trim();
  if (!location) return;

  loading.hidden = false;
  weatherInfo.innerHTML = "";

  try {
    const weather = await fetchWeather(location);
    weatherInfo.innerHTML = `
      <h2>${weather.name}</h2>
      <p>🌡️ ${weather.temp} °C</p>
      <p>${weather.desc}</p>
    `;
  } catch (err) {
    weatherInfo.innerHTML = `<p style="color:red;">Could not fetch weather. Try again.</p>`;
  } finally {
    loading.hidden = true;
  }
});
