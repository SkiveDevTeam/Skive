import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chatroom from './pages/chatroom.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/chatroom' element={<Chatroom />}/>
        </Routes>
     </BrowserRouter>
    );
  }
}

export default App;