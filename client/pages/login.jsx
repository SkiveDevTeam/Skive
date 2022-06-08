import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Container, Box, Button } from '@mui/material';
import './login.css';
import sloth from '../assets/skive-sloth-icon.png';

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(username, password);
      fetch('/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Successful login:', data);
          localStorage.setItem('userId', data.username);
          navigate('/chatroom');
        })
        .catch((error) => {
        console.log('Error: ', error);
        });
  };

  return (
    <Container style={{border:'2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '12%'}} maxWidth='sm'>
      <h1 id='Login'> Welcome to Skive</h1>
      <img style={{width: '30%'}} src={sloth} alt='logo'/>
      <br></br>
      <br></br>
      <br></br>
      {error !== null && error}
      <Box  style={{width: '60%' }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TextField
          style={{width: '100%'}}
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
        //   sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
          style={{width: '100%'}}
          size='small'
          className='signin'
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{' '}
      </Box>
      <br></br>
      <Button      
        style={{width: '60%',  background:'black'}}
        onClick={login} 
        variant='contained'>
        {' '}
        Log In
      </Button>
      <p>
        new user? {' '}
        <Link to='/signup'>sign up </Link>
      </p>
    </Container>
  );
}

export default Login;