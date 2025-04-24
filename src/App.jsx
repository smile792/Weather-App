import { useEffect, useState } from "react";
import { useFetching } from "./hooks/useFetching";
import { WeatherService } from "./weatherService";
import { Weatherinterface } from "./components/weatherInteface";
function App() {
  const [weatherCity, setWeatherCity] = useState({});
  const [city, setCity] = useState("Pyatigorsk");
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await WeatherService.getByCity(city);
    setWeatherCity(response.data);
  });
  useEffect(() => {
    fetching();
  }, [city]);
  return (
    <div>
      {error ? (
        <h1>упс, какая-то ошибка...</h1>
      ) : isLoading ? (
        <h1>Загрузка...</h1>
      ) : (
        <Weatherinterface weather={weatherCity} setCity={setCity} />
      )}
    </div>
  );
}

export default App;
