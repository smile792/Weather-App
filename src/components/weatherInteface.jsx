import { Link } from "react-router-dom";
import { MyButton } from "./MyButton/MyButton";
import { WeatherText } from "./weatherText";
import { MyInput } from "./MyInput/MyInput";
import { useState } from "react";

export const Weatherinterface = ({ weather, setCity }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const onText = () => {
    const isValid = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/.test(text.trim());
    if (!isValid) {
      alert("Введите корректное название города (только буквы)");
      return;
    }
    setCity(text);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setCity(e.target.value);
  };
  return (
    <>
      <div className="weather-interface">
        <select value={value} onChange={handleChange}>
          <option disabled value="">
            Выберите город
          </option>
          <option value="Pyatigorsk">Pyatigorsk</option>
          <option value="Zheleznovodsk">Zheleznovodsk</option>
          <option value="Georgievsk">Georgievsk</option>
        </select>
        <div className="weather-interface-input">
          <MyInput
            placeholder={"Название города на английском"}
            value={text}
            type={"text"}
            onChange={changeText}
          />
          <MyButton children={"Получить информацию"} onClick={onText} />
        </div>
        <WeatherText weather={weather} />
        <div className="weather-interface-btn-bottom">
          <Link to={"/weatherByLonLat"}>
            <MyButton children={"Поиск по координатам"} />
          </Link>
        </div>
      </div>
    </>
  );
};
