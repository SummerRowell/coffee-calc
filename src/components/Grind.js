import React from 'react';
import Card from 'react-bootstrap/Card';

const Grind = ({grindSize, brewMethod}) => {
    return (
        <Card style={{ maxWidth: '18rem'}}>
            <Card.Body>
                <Card.Title>
                    Grind Size
                </Card.Title>
                <Card.Text>We recommend a {grindSize} grind for {brewMethod} coffee.</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Grind;