import React from 'react';

const Message = ({ index, message, username }) => {

  return (
    <>
      <li key={index}>
        <span style={{ color: 'lightblue', marginRight: '10px' }}>{username}:</span> {message}
      </li>
    </>
  );
}

export default Message;