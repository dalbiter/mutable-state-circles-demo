import React from 'react';
import './ColorButton.css';

const ColorButton = ({ addCircle, color}) => {
    return (
      <button
        onClick={() => addCircle(color)}
        className="ColorButton-btn"
        style={{ backgroundColor: color }}
        key={color}
      >
        {color}
      </button>
    );
}

export default ColorButton;