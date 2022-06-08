import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Container, Box, Button } from '@mui/material';
import sleepySloth from '../assets/skive-sleepy-sloth.png';
function Signup (props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signupUser = () => {
    console.log(username, password);
    fetch('/login/signup', {
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
      <h1 id='Signup'> Signup for Skive </h1>
      <img style={{width: '70%'}} src={sleepySloth} alt='logo'/>
      <br></br>
      <br></br>
      <Box style={{width: '60%' }} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <TextField
          style={{width: '100%'}}
          size='small'
          className='signin'
          type='text'
          placeholder='Username'
          margin='dense'
        //   sx={{ mr: 5 }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />{' '}
        <br></br>
        <TextField
          style={{width: '100%'}}
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
      <Button 
        style={{width: '60%',  background:'black'}} 
        onClick={signupUser} 
        variant='contained'>
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