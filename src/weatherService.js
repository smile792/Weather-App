import axios from "axios";

export const WeatherService = {
  getByCity: async (sityName) => {
    const response = await axios.get(
      `https://masterclass-weather-app-production.up.railway.app/open-weather/city-weather?cityName=${sityName}`
    );
    return response;
  },
};
