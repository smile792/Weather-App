import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { WeatherService } from "../weatherService";
import { WeatherText } from "../components/weatherText";
import { MyButton } from "../components/MyButton/MyButton";
import { MyInput } from "../components/MyInput/MyInput";
import { Link } from "react-router-dom";
export const WeatherByLonLat = () => {
  const [weatherByLonLat, setWeatherByLonLat] = useState([]);
  const [lon, setLon] = useState(43.0706669);
  const [lat, setLat] = useState(44.039775);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await WeatherService.getByLonLat(lon, lat);
    setWeatherByLonLat(response.data);
  });
  useEffect(() => {
    fetching();
    console.log(weatherByLonLat);
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Загрузка...</h1>
      ) : (
        <WeatherText weather={weatherByLonLat} />
      )}
      <div className="weatherByLonLat-input">
        <MyInput
          placeholder="Долгота"
          value={lon}
          type="number"
          onChange={(e) => setLon(e.target.value)}
        />
        <MyInput
          placeholder="Широта"
          value={lat}
          type="number"
          onChange={(e) => setLat(e.target.value)}
        />
      </div>
      <div className="weatherByLonLat-btn">
        <MyButton onClick={fetching}>Получить информацию</MyButton>
        <Link to={"/"}>
          <MyButton>Поиск по городу</MyButton>
        </Link>
      </div>
      {error && <h1>Упс, ошибка... {error}</h1>}
    </div>
  );
};
