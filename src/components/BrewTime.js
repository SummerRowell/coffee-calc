import React from 'react';
import Card from 'react-bootstrap/Card'

const BrewTime = ( {brewType} ) => {
    return (
        <Card style={{ maxWidth: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    Brew Time
                </Card.Title>
                <Card.Text>
                    {brewType.time}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BrewTime;