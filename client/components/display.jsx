import React, { useEffect } from 'react';
import Message from './message.jsx';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../actions/constants.js';
import sloth from '../assets/skive-sloth-icon.png';

const Display = () => {

  const dispatch = useDispatch();

  const getMessages = () => {
    fetch('/messages')
      .then(response => response.json())
      .then(messages => {
        // console.log('in fetch:', messages);
        dispatch({
        type: types.NEW_MESSAGES,
        payload: messages
      });
    })
  }
  
  useEffect(() => {
    // console.log('in useEffect');
    // setInterval(getMessages, 5000);
    getMessages()
  }, []);

  const messages = useSelector(
    state => {
      // console.log('state:', state)
      return state.reducers.messages.messages
    } 
  );


// console.log('messages:', messages)
  const boxes = [];
  for (let i = messages.length - 1; i > 0; i--) {
    const { message, username } = messages[i];
    boxes.push(<Message key={'message:' + i} index={i} msg={message} username={username}/>)
  }

  return (
    <>
      <h1 id='Login'> Skive</h1>
      <img style={{width: '30%'}} src={sloth} alt='logo'/>
      <br></br>
      <br></br>
      <ul style={{listStyleType: 'none', padding: '0'}}> {boxes} </ul>
    </>
  );
}

export default Display;