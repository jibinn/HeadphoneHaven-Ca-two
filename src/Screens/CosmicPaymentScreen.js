import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutStep from '../components/CheckoutSteps';
import { savePaymentMethod } from '../action/CartActions';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CosmicPaymentScreen() {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook

  const [paymentMethod, setPaymentMethod] = useState('PayPal');

  if (!shippingAddress.address) {
    navigate('/shipping'); 
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/placeorder'); // Use navigate 
  };

  return (
    <FormContainer>
    <CheckoutStep step1 step2 step3 />

    <Form onSubmit={submitHandler}>
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
            <Col>
                <Form.Check
                    type='radio'
                    label='PayPal or Credit Card'
                    id='paypal'
                    name='paymentMethod'
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                >

                </Form.Check>
            </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
            Continue
        </Button>
    </Form>
</FormContainer>
)
}


export default CosmicPaymentScreen
