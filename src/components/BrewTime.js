import React from 'react';
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";


const BrewTime = ( {brewType} ) => {
    return (
        <Card style={{ maxWidth: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    Brew Time
                </Card.Title>
                <Card.Text>
                    {brewType.time}
                    . Use our <Link to='/stopwatch'>stopwatch</Link> to time your brew.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BrewTime;