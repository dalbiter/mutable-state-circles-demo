import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";


const ColoredCircle = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles(circles => [...circles, color]);
  };

  return (
    <div>
      <ColorButtons
        addCircle={addCircle}
        options={["peachpuff", "lightsteelblue", "paleturquoise"]}
      />
      <ColorButtons
        addCircle={addCircle}
        options={["orange", "magenta", "teal"]}
      />
      {circles.map((color, idx) => (
        <Circle 
            color={color} 
            idx={idx} 
            key={idx} />
      ))}
    </div>
  );
};

export default ColoredCircle;
