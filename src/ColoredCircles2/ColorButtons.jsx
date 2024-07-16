import React from "react";
import ColorButton from "./ColorButton";

const ColorButtons = ({ addCircle, options }) => {
  return (
    <div className="ColorButtons">
      {options.map((color) => (
        <ColorButton color={color} addCircle={addCircle} key={color} />
      ))}
    </div>
  );
};

export default ColorButtons;
