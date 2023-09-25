import React from "react";

const ColorInput = ({ inputVal, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        id="colorinput"
        placeholder="Add color name"
        value={inputVal}
        onChange={handleChange}
      />
    </form>
  );
};

export default ColorInput;
