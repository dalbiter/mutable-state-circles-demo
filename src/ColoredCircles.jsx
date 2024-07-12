import React, { useState } from 'react';
import Circle from './Circle';

const ColoredCircle = () => {
    const [circles, setCircles] = useState(['cornflowerBlue', 'honeydew', 'peachPuff'])
    const addCircle = () => {
        setCircles(circles => [...circles, 'magenta'])    
    }
    return (
        <div>
            {circles.map((color, idx) => (
            <Circle color={color} idx={idx} key={idx}/>
        ))}
        <button onClick={addCircle}>Add</button>
        </div>
        
    )
}

export default ColoredCircle;