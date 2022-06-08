import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Message = ({index, msg, username}) => {
  // useEffect(() => {

  // });
  return (
    <>
      <li key={index}>
        {username}: {msg}
      </li>
    </>
  );
}

export default Message;