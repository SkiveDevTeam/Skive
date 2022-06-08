import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Container, Box, Button } from '@mui/material';

function Signup (props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = () => {
    console.log(username, password);
    fetch('/signup', {
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
          localStorage.setItem('userId', data.data);
          navigate('/chatroom');
        })
        .catch((error) => {
        console.log('Error: ', error);
        });
  };

  return (
    <Container maxWidth='sm'>
      <h1 id='Signup'> Signup</h1>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <TextField
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
          margin='dense'
          sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
          size='small'
          margin='dense'
          className='signin'
          type='password'
          // type = 'hidden'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Box>
      <br></br>
      <Button onClick={signupUser} variant='contained'>
        Sign up
      </Button>
      <p>
        Already a user? {' '}
        <Link to='/'>Log in here </Link>
      </p>
    </Container>
  );
}

export default Signup;