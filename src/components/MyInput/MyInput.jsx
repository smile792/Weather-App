import classes from "./MyInput.module.css";
export const MyInput = ({ placeholder, value, type, onChange }) => {
  return (
    <div className="weather-input">
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        className={classes.myInput}
      />
    </div>
  );
};
