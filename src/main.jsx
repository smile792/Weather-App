import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { WeatherByLonLat } from "./page/WeatherByLonLat.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/weatherByLonLat" />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
    <App />
  </BrowserRouter>
);
