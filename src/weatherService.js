import axios from "axios";

export const WeatherService = {
  getByCity: async (sityName) => {
    const response = await axios.get(
      `https://masterclass-weather-app-production.up.railway.app/open-weather/city-weather?cityName=${sityName}`
    );
    return response;
  },
  getByLonLat: async (lon, lat) => {
    const response = await axios.get(
      `https://masterclass-weather-app-production.up.railway.app/open-weather/weather-by-coords?lon=${lon}&lat=${lat}`
    );
    return response;
  },
};
