import React, { useEffect } from 'react';

const Message = ({ index, message, username }) => {

  return (
    <>
      <li key={index}>
        {username}: {message}
      </li>
    </>
  );
}

export default Message;