import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Container, Box, Button } from '@mui/material';


const Input = () => {
  const [message, setMessage] = useState('');
  const username = localStorage.getItem('userId');
  console.log('local storage username:', username)
  
  const postMessage = () => {
    fetch('/messages', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
      })
      .catch((error) => {
      console.log('Error: ', error);
      });
  }

  return (
    <div> 
        <TextField
          size='small'
          className='messageInput'
          type='messageInput'
          placeholder='Input message here...'
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />

        <Button 
            onClick={postMessage} 
            style={{background: 'black', marginLeft: '15px'}}
            variant='contained'>
            {' '}
            submit
        </Button>




    </div>
  );
}

export default Input;