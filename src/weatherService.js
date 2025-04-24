import axios from "axios";

export const WeatherService = {
  getByCity: async (sityName) => {
    const response = await axios.get(
      `http://localhost:3000/open-weather/city-weather?cityName=${sityName}`
    );
    return response;
  },
};
