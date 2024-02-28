import style from "./display.module.css";

const Display = ({value}) => {
  return <input value={value} type="text" className={style.input} readOnly/>;
};

export default Display;
