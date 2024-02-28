import "./App.css";
import Display from "./components/display";
import Button from "./components/buttons";
import { useState } from "react";

function App() {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [dispValue, setValue] = useState("");

  let updateValue = (button) => {
    if(button ==="C"){
      setValue("");
    }else if(button==="="){
      setValue(eval(dispValue));
    }else
    setValue(dispValue + button);
  };

  return (
    <div className="calContainer">
      <Display value={dispValue}></Display>
      <div className="buttonContainer">
        {buttons.map((button) => (
          <Button
            key={button}
            btn={button}
            keyPressed={updateValue}
          ></Button>
        ))}
      </div>
    </div>
  );
}

export default App;
