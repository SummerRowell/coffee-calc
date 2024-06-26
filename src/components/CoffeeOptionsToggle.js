import React from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const CoffeeOptionsToggle = ({ handleClick }) => {
    return (
        <ToggleButtonGroup type='radio' name='options' className='mb-2'>
          <ToggleButton  id="option-1" value={0} onChange={(e) => handleClick(0)}>Pour-over</ToggleButton>
          <ToggleButton  id="option-2" value={4} onChange={(e) => handleClick(1)}>Chemex</ToggleButton>
          <ToggleButton  id="option-3" value={2} onChange={(e) => handleClick(2)}>Aeropress</ToggleButton>
          <ToggleButton  id="option-4" value={3} onChange={(e) => handleClick(3)}>French Press</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default CoffeeOptionsToggle;