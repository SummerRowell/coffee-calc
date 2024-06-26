import React, { useState, useEffect }  from 'react';
import './Stopwatch.css'
import StopwatchButtons from './StopwatchButtons';
import { Container, Row, Card, Col }from 'react-bootstrap';
import CoffeeSprite from '../animation/Coffee';
import NavBar from '../NavBar';


const Stopwatch = () => {
    const [frameIndex, setFrameIndex] = useState(0);
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
        <NavBar></NavBar>
        <Container className='Stopwatch'>
            <Row>
                <Row className='stopwatch-screen'>
                    <Col className='digits'>
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                        {("0" + ((time / 10) % 100)).slice(-2)}
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <CoffeeSprite index={frameIndex} />
                </Row>
                <StopwatchButtons
                        isActive={isActive}
                        isPaused={isPaused}
                        handleStart={handleStart}
                        handlePauseResume={handlePauseResume}
                        handleReset={handleReset} />
            </Row>
        </Container>
        </Card>  
    )
}
    
export default Stopwatch;    