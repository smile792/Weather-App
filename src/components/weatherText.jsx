export const WeatherText = ({ weather }) => {
  return (
    <div className="weather-text">
      <h1>{weather.cityName}</h1>
      <p>Температура {Math.round(weather.temperature)} °C</p>
      <p>Ощущается как {Math.round(weather.feelsLikeTemperature)} °C</p>
      <p>Скорость ветра {weather.windSpeed} м/с</p>
    </div>
  );
};
