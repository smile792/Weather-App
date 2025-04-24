import classes from "./MyButton.module.css";

export const WeatherButton = ({ children, onClick }) => {
  return (
    <div className="weather-Btn">
      <button className={classes.myBtn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
