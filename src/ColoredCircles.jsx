import React from 'react';
import Circle from './Circle';

const ColoredCircle = () => {
    const circles = ['violet', 'honeydew', 'peachpuff']
    return (
        <div>
            {circles.map((color, idx) => (
            <Circle color={color} idx={idx}/>
        ))}
        </div>
        
    )
}

export default ColoredCircle;