import React, { useState } from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const ColoredCircle = () => {
  const [circles, setCircles] = useState([]);
  const addCircle = (color) => {
    setCircles((circles) => [
      ...circles,
      { color, x: getRandom(), y: getRandom() }
    ]);
  };

  // const changePosition = idx => {
  //   setCircles(circles => {
  //       const copy = [...circles]
  //       copy[idx].y = getRandom()
  //       copy[idx].x = getRandom()
  //       return copy
  //   })
  // };
// Another way to do this below
  const changePosition = idx => {
      setCircles(circles => (
          circles.map((circle, i) => (
              i === idx
                  ? {...circle, x: getRandom(), y: getRandom()}
                  : circle
          ))
      ))
  }

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
      {circles.map(({ color, x, y }, idx) => (
        <Circle 
            changePosition={changePosition} 
            color={color} 
            idx={idx} 
            x={x} 
            y={y} 
            key={idx} />
      ))}
    </div>
  );
};

export default ColoredCircle;
