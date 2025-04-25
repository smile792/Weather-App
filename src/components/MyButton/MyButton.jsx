import classes from "./MyButton.module.css";

export const MyButton = ({ children, onClick, style }) => {
  return (
    <div className="weather-Btn">
      <button className={classes.myBtn} style={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
