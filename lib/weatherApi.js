import axios from 'axios';

const WEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function getWeatherByZipCode(zipCode, countryCode = 'us') {
  try {
    const response = await axios.get(WEATHER_API_BASE_URL, {
      params: {
        zip: `${zipCode},${countryCode}`,
        appid: WEATHER_API_KEY,
        units: 'imperial' // Use Fahrenheit for temperature
      }
    });
    
    return {
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      weather_condition: response.data.weather[0].main,
      weather_description: response.data.weather[0].description,
      wind_speed: response.data.wind.speed,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw new Error('Failed to fetch weather data');
  }
} 