import React from 'react';
import { TextField, Container, Box, Button } from '@mui/material';
import Display from '../components/display.jsx';
import Input from '../components/input.jsx'

function Chatroom () {

    //some fetch info function here

    return (
        <div>
            <Display/>
            <Input/>
        </div>
    );
}

export default Chatroom;