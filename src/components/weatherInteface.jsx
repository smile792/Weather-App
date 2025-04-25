import { Link } from "react-router-dom";
import { MyButton } from "./MyButton/MyButton";
import { WeatherText } from "./weatherText";
import { MyInput } from "./MyInput/MyInput";
import { useState } from "react";

export const Weatherinterface = ({ weather, setCity }) => {
  const [text, setText] = useState("");
  const changeText = (e) => {
    setText(e.target.value);
  };
  const onText = () => {
    setCity(text);
  };
  return (
    <>
      <div className="weather-interface">
        <div className="weather-interface-btn">
          <MyButton
            children={"Georgievsk"}
            onClick={() => setCity("Georgievsk")}
          />
          <MyButton
            children={"Pyatigorsk"}
            onClick={() => setCity("Pyatigorsk")}
          />
          <MyButton
            children={"Zheleznovodsk"}
            onClick={() => setCity("Zheleznovodsk")}
          />
        </div>
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
