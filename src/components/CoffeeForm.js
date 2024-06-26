import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CoffeeForm = ( {size, setSize, sizeType, setSizeType }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newSize = form.size.value;
        const newSizeType = form.sizeType.value;
        setSize(newSize);
        setSizeType(newSizeType);
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='sizeForm.num'>
            <Container>
            <Row>
                <Col>
                    <Form.Control type='number' name='size' defaultValue={size} placeholder='Amount of Coffee' />
                </Col>
                <Col>
                    <Form.Check
                        label='Cups (240g)'
                        name='sizeType'
                        type='radio'
                        value='cups'
                        checked={sizeType === 'cups'}
                        onChange={() => setSizeType('cups')}
                    />
                </Col>
                <Col>
                    <Form.Check
                        label='Grams'
                        name='sizeType'
                        type='radio'
                        value='grams'
                        checked={sizeType === 'grams'}
                        onChange={() => setSizeType('grams')}
                    />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                    Update
                    </Button>
                </Col>
            </Row>
            </Container>

        </Form.Group>
        </Form>
    );
    };

export default CoffeeForm;
