import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register } from '../action/userAction';

function CosmicRegisterScreen() {
  const navigate = useNavigate();
  const location = useLocation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    const submitHandler = (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
        } else {
          dispatch(register(name, email, password));
        }
      };
    
      useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, userInfo, redirect]);

    return (
     
    )
}


export default CosmicRegisterScreen
