import React from 'react';
import './Timer.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const TimerButtons = ({ isActive, isPaused, handleStart, handleReset, handlePauseResume }) => {
    
    const StartButton = (
        <Button onClick={handleStart}>
            Start
        </Button>
    );

    const ActiveButtons = (
        <ButtonGroup>
            <Button variant='secondary' onClick={handleReset}>
                Reset
            </Button>
            <Button variant='secondary' onClick={handlePauseResume}>
                {isPaused ? "Resume" : "Pause"}
            </Button>
        </ButtonGroup>
    );

    return (
        <div className='Timer-Buttons'>
            {isActive ? ActiveButtons : StartButton}
        </div>
    );
}

export default TimerButtons;
