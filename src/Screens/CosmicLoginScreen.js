import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { login } from '../action/userAction';
import './Login.css';

function CosmicLoginScreen() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(false);
  
    const dispatch = useDispatch();
    const location = useLocation();
  
    const redirect = location.search ? location.search.split('=')[1] : '/';
  
    const userLogin = useSelector(state => state.userLogin);
    const { error, loading, userInfo } = userLogin;
  
    useEffect(() => {
        if (userInfo && redirectAfterLogin) {
            navigate(redirect);
        }
    }, [navigate, userInfo, redirect, redirectAfterLogin]);
  
    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
        setRedirectAfterLogin(true);
    };
  
    return (
        <FormContainer className="login-container">
            <h1 className="text-center mb-4">Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control" 
                    />
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control" 
                    />
                </Form.Group>
                <Button id="yourButtonId" type='submit' variant='primary' className="submit-button w-100">
    Sign In
</Button>

            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer?{' '}
                    <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
}
export default CosmicLoginScreen;
