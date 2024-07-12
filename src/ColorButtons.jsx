import React, { useState } from 'react';
import './ColorButtons.css';

const ColorButtons = ({ addCircle, options}) => {
    return (
        <div className="ColorButtons">
            {options.map(color => (
                <button 
                    onClick={() => addCircle(color)}
                    className="ColorButtons-btn"
                    style={{ backgroundColor: color }}
                    key={color}
                >
                    {color}
                </button>
             ))}
        </div>
    )
}

export default ColorButtons;