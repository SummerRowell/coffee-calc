import React from 'react';
import { Button, Form } from 'react-bootstrap';


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
            <Form.Control type='number' name='size' defaultValue={size} placeholder='Amount of Coffee' />
            <Form.Check
                label='Cups (240g)'
                name='sizeType'
                type='radio'
                value='cups'
                checked={sizeType === 'cups'}
                onChange={() => setSizeType('cups')}
            />
            <Form.Check
                label='Grams'
                name='sizeType'
                type='radio'
                value='grams'
                checked={sizeType === 'grams'}
                onChange={() => setSizeType('grams')}
            />
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form.Group>
        </Form>
    );
    };

export default CoffeeForm;
