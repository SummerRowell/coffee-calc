import './App.css';
import React, { useEffect, useState } from 'react';
import { coffeeOptions } from './components/CoffeeOptions';
import Timer from './components/Timer/Timer';
import CoffeeOptionsToggle from './components/CoffeeOptionsToggle';
import RatioSelector from './components/RatioSelector';
import CoffeeForm from './components/CoffeeForm';
import Grind from './components/Grind';
import BrewTime from './components/BrewTime';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Results from './components/Results';

function App() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
    // setSelected(true);
  }

  let brewType = coffeeOptions[index];

  const [ratio, setRatio] = useState(brewType.standard);
  const [size, setSize] = useState(1);
  const [sizeType, setSizeType] = useState("cups");
  const [displayTimer, setDisplayTimer] = useState(false);

  useEffect(() => {
    console.log(brewType.type)
    console.log(ratio)
    console.log(size)
    console.log(sizeType)
  }, [brewType, ratio, size, sizeType]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around;',
    alignItems: 'center',
    alignContent: 'around'
}

  return (
      <Container style={containerStyle}>
        <Row>
          <Col>
            <Card>
              <Card.Header>What brewing method will you be using?</Card.Header>
              <Card.Body>
                <CoffeeOptionsToggle handleClick={handleClick}></CoffeeOptionsToggle>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Header>How strong would you like your coffee?</Card.Header>
              <Card.Body>
                  <RatioSelector brewType={brewType} setRatio={setRatio}></RatioSelector>
              </Card.Body>
            </Card>
            </Col>
            <Col>

            <Card>
              <Card.Header>How much coffee would you like to brew?</Card.Header>
              <Card.Body>
                <CoffeeForm size={size} setSize={setSize} sizeType={sizeType} setSizeType={setSizeType} />
              </Card.Body>
            </Card>
            </Col>
        </Row>
        <Row>
          <Col>
          <Grind grindSize={brewType.grind} brewMethod={brewType.type}></Grind>
          </Col>
          <Col>
          <Results ratio={ratio} size={size} sizeType={sizeType}></Results>
          </Col>
          <Col>
          <BrewTime brewType={brewType}></BrewTime>
          </Col>
        </Row>
        <Row>
            <Card>
              <Card.Body>
                <Timer frameIndex={frameIndex} setFrameIndex={setFrameIndex} displayTimer={displayTimer} setDisplayTimer={setDisplayTimer}/>
              </Card.Body>
            </Card>
        </Row>
      </Container>
  );
}

export default App;