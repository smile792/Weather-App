import { Link } from "react-router-dom";
import { MyButton } from "./MyButton/MyButton";
import { WeatherText } from "./weatherText";
import { MyInput } from "./MyInput/MyInput";
import { useState } from "react";
import { MySelect } from "./MySelect/MySelect";

export const Weatherinterface = ({ weather, setCity }) => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeText = (e) => {
    const lettersOnly = e.target.value.replace(/[^a-zA-Z\s-]/g, "");
    setText(lettersOnly);
  };
  const onText = () => {
    if (!text) {
      setErrorMessage("Поле не может быть пустым");
      return;
    }
    setErrorMessage("");
    setCity(text);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setCity(e.target.value);
  };
  return (
    <>
      <div className="weather-interface">
        <div className="weather-interface-input">
          <MyInput
            placeholder={"Название города на английском"}
            value={text}
            type={"text"}
            onChange={changeText}
          />
          <MySelect
            defaultValue={"Выберите город"}
            value={value}
            onChange={handleChange}
            options={[
              { value: "Pyatigorsk", name: "Pyatigorsk" },
              { value: "Zheleznovodsk", name: "Zheleznovodsk" },
              { value: "Georgievsk", name: "Georgievsk" },
            ]}
          />
        </div>
        {errorMessage && <div className="error-input">{errorMessage}</div>}
        <WeatherText weather={weather} />
        <div className="weather-interface-btn">
          <MyButton children={"Получить информацию"} onClick={onText} />
          <Link to={"/weatherByLonLat"}>
            <MyButton children={"Поиск по координатам"} />
          </Link>
        </div>
      </div>
    </>
  );
};
