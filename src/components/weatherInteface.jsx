import { WeatherButton } from "./MyButton/weatherButton";

export const Weatherinterface = ({ weather, setCity }) => {
  console.log(weather);
  return (
    <>
      <div className="weather-interface">
        <div className="weather-interface-btn">
          <WeatherButton
            children={"Georgievsk"}
            onClick={() => setCity("Georgievsk")}
          />
          <WeatherButton
            children={"Pyatigorsk"}
            onClick={() => setCity("Pyatigorsk")}
          />
          <WeatherButton
            children={"Zheleznovodsk"}
            onClick={() => setCity("Zheleznovodsk")}
          />
        </div>
        <div className="weather-text">
          <h1>{weather.cityName}</h1>
          <p>Температура {Math.round(weather.temperature)} °C</p>
          <p>Ощущается как {Math.round(weather.feelsLikeTemperature)} °C</p>
          <p>Скорость метра {weather.windSpeed} м/с</p>
        </div>
      </div>
    </>
  );
};
