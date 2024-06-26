import React from 'react';
import './Coffee.css';
import Image from 'react-bootstrap/Image';

const CoffeeSprite = ({index}) => {

    const frameWidth = 128;
    const frameHeight = 128;

    const framePositions = [
        {x: 0, y: 0},
        {x: 128, y: 0},
        {x: 256, y: 0},
        {x: 384, y: 0},
        {x: 512, y: 0},
        {x: 0, y: 128},
        {x: 128, y: 128},
        {x: 256, y: 128},
        {x: 384, y: 128},
    ]

    const { x, y } = framePositions[index];

    const coffeeStyle = {
        width: `${frameWidth}px`,
        height: `${frameHeight}px`,
        backgroundPosition: `-${x}px -${y}px`,
    };

    return <div className='coffee-sprite' style={coffeeStyle}></div>
}

export default CoffeeSprite;
