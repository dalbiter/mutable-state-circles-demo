import React, { useState } from 'react';
import './Circle.css'

const Circle = ({ changePosition, color, idx, x, y }) => {
    return (
        <div
            className="Circle"
            style={{
                backgroundColor: color,
                position: 'absolute',
                top: `${y}vh`,
                left: `${x}vw`
            }}
            onClick={() => changePosition(idx)}
        >
            {idx + 1}
        </div>
    )
}

export default Circle