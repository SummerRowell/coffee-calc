import React, { useState, useEffect }  from 'react';
import TimerButtons from './TimerButtons';
import TimerScreen from './TimerScreen';
import './Timer.css';
import { Container, Row, Card, Button }from 'react-bootstrap';
import CoffeeSprite from '../animation/Coffee';


const Timer = ({frameIndex, setFrameIndex, displayTimer, setDisplayTimer}) => {
    const [isActive, setActive] = useState(false);
    const [isPaused, setPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
            } else {
                clearInterval(interval);
            }

            return () => {
                clearInterval(interval);
            }
    }, [isActive, isPaused]);

    const handleStart = () => {
        setActive(true);
        setPaused(false);
    }

    const handlePauseResume = () => {
        setPaused(!isPaused);
    };

    const handleReset = () => {
        setActive(false);
        setTime(0);
    }

    useEffect(() => {
        let animationInterval;

        if (isActive && !isPaused) {
            animationInterval = setInterval(() => {
                setFrameIndex((prev) => (prev + 1) % 9)
            }, 200);
        } else {
            clearInterval(animationInterval);
        };

        return () => clearInterval(animationInterval);
    }, [isActive, isPaused, setFrameIndex]);

    return (
        <Card>
        <Container>
            <Row>
            <Button variant='primary' onClick={() => setDisplayTimer(!displayTimer)}>
                {displayTimer ? 'Hide Timer' : 'Show Timer'}
            </Button>
            {displayTimer && 
                <>
                    <TimerScreen time={time} />
                    <CoffeeSprite index={frameIndex} />
                    <TimerButtons
                            isActive={isActive}
                            isPaused={isPaused}
                            handleStart={handleStart}
                            handlePauseResume={handlePauseResume}
                            handleReset={handleReset} />
                </>
                
            }
            </Row>
        </Container>
        </Card>

    )
}
    
export default Timer;    