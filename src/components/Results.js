import React from 'react';
import Card from 'react-bootstrap/Card'

const Results = ( {ratio, size, sizeType }) => {
    return (
        <Card style={{ maxWidth: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    Coffee & Water
                </Card.Title>
                <Card.Text>
                    {sizeType === 'cups' ? `Use ${(size * 240)} grams of water and ${Math.round((size * 240) / ratio)} grams of coffee.` : `Use ${size} grams of water and ${Math.round(size / ratio)} grams of coffee.`}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Results;