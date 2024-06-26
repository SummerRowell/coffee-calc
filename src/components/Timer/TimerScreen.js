import React from 'react';
import './Timer.css';
import { Container, Row, Col } from 'react-bootstrap';


const TimerScreen = ({time}) => {
    return (
        <Container>
            <Row>
                <Col>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </Col>
            </Row>
        </Container>
    )
}

export default TimerScreen;

// export default function TimerScreen(props) {
//     return (
//         <div className='timer-screen'>
//             <span className="digits">
//                 {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
//             </span>
//             <span className="digits">
//                 {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
//             </span>
//             <span className="digits mili-sec">
//                 {("0" + ((props.time / 10) % 100)).slice(-2)}
//             </span>
//         </div>
//     )
// }