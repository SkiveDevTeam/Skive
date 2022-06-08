import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Container, Box, Button } from '@mui/material';

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
    <Container maxWidth='sm'>
      <h1 id='Login'> Login!</h1>
      {error !== null && error}
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <TextField
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
          sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
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