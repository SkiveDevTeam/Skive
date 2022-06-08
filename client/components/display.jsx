import React from 'react';
import Message from './message.jsx';
import { useDispatch, useSelector } from 'react-redux';


const Display = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/messages')
      .then(response => response.json())
      .then(messages => dispatchEvent({
        types: types.NEW_MESSAGES,
        payload: messages
      }))
  }, []);

  const messages = useSelector(
    state => state.messages
  );

  const box = [];

  for (let i = 0; i < messages.length; i++) {
    // { dataPoints } = messages[i];
    // box.push(<Message key={i} ...></>)
  }

  return (
    <div> hello </div>
  );
}

export default Display;