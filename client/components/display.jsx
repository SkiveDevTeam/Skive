import React, { useEffect, useState, useRef } from 'react';
import Message from './message.jsx';
import ioClient from "socket.io-client";
import { Box, Button } from '@mui/material';
const SERVER = 3036;
let socket;

const Display = () => {
  const username = localStorage.getItem('userId');
  const [messages, setMessages] = useState([]);;
  const inputRef = useRef();
  const configureSocket = () => {
    socket = ioClient(
      `ws://localhost:${SERVER}`,
      { transports: ['websocket', 'polling'] },
      { timeout: 2000 }
    );
    socket.on('connect', () => {
      console.log('connected');
    });
    socket.on('disconnect', () => {
      console.log('disconnected');
    });
    socket.on('message', ({ message, username }) => {
      setMessages((all) =>
        all.concat(
          <Message
            key={all.length}
            index={`message${all.length}`}
            message={message}
            username={username}
          />
        )
      );
    })
  }

  const postMessage = () => {
    const message = inputRef.current.value;
    socket.emit('send-message', { message, username, id: Date.now() });
    inputRef.current.value = '';
  }

  useEffect(() => {
    configureSocket();
  }, []);

  return (
    <div>
      <ul id='list'> {messages} </ul>
      <div>
        <input
          id='inputBox'
          ref={inputRef}
          className='messageInput'
          placeholder='Input message here...'
          onKeyPress={(e) => {
            if (e.key === 'Enter') postMessage();
          }}
        />
        <Button
          onClick={postMessage}
          variant='contained'>
          {' '}
          submit
        </Button>
      </div>
    </div>
  );
}

export default Display;