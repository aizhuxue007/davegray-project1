import React from "react";

const ColorBox = ({ color }) => {
  return (
    <section
      className="colorbox boxshad"
      style={{ background: color.toLowerCase(), color: "White" }}
    >
      <h3>{color}</h3>
    </section>
  );
};

export default ColorBox;
