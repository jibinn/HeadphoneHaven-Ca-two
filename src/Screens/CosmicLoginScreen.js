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
       
    );
}
export default CosmicLoginScreen;
