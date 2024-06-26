import './App.css';
import React, { useEffect, useState } from 'react';
import { coffeeOptions } from './components/CoffeeOptions';
import CoffeeOptionsToggle from './components/CoffeeOptionsToggle';
import RatioSelector from './components/RatioSelector';
import CoffeeForm from './components/CoffeeForm';
import Grind from './components/Grind';
import BrewTime from './components/BrewTime';
import Results from './components/Results';
import NavBar from './components/NavBar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  const [index, setIndex] = useState(0);

  function handleClick(index) {
    setIndex(index);
  }

  let brewType = coffeeOptions[index];

  const [ratio, setRatio] = useState(brewType.standard);
  const [size, setSize] = useState(1);
  const [sizeType, setSizeType] = useState("cups");

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
    alignContent: 'around',
    padding: '5rem 5rem 5rem 5rem'
}

  const rowStyle = {
    padding: '1rem 1rem 1rem 1rem',
  }

  return (
    <div id='App'>
    <NavBar></NavBar>
      <Container style={containerStyle}>
        <Row style={rowStyle}> Select your brewing method:
            <CoffeeOptionsToggle handleClick={handleClick}></CoffeeOptionsToggle>
          </Row>
          <Row style={rowStyle}> Select your preferred strength:
              <RatioSelector brewType={brewType} setRatio={setRatio}></RatioSelector>
              </Row>
              <Row style={rowStyle}>Enter the amount of coffee you will be brewing:
                <CoffeeForm size={size} setSize={setSize} sizeType={sizeType} setSizeType={setSizeType} />
              </Row>
        <Row style={rowStyle}>
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
      </Container>
      </div>

  );
}

export default App;