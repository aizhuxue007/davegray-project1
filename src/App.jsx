import React from "react";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";
import { useState } from "react";
import "./App.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [color, setColor] = useState("Empty Value");

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(inputVal);
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <main>
      <ColorBox color={color} />
      <ColorInput
        inputVal={inputVal}
        setInputVal={setInputVal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
