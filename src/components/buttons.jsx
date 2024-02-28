import style from "./buttons.module.css";

const Button = ({ btn, keyPressed}) => {

  return <button onClick={()=>keyPressed(btn)} className={style.calButton}>{btn}</button>;
};

export default Button;
