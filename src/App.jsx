import { Route, Routes } from "react-router-dom";
import { WeatherByLonLat } from "./page/WeatherByLonLat";
import { WeatherByCity } from "./page/WeatherByCity";
function App() {
  return (
    <Routes>
      <Route path="/" element={<WeatherByCity />} />
      <Route path="/weatherByLonLat" element={<WeatherByLonLat />} />
    </Routes>
  );
}

export default App;
