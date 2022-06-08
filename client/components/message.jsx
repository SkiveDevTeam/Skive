import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Message = ({index, msg, username}) => {
  // useEffect(() => {

  // });
  return (
    <>
      <li key={index}>
        <span style={{color: 'lightblue', marginRight: '10px'}}>{username}:</span> {msg}
      </li>
    </>
  );
}

export default Message;