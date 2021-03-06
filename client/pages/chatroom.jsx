import React, { useState } from 'react';
import { TextField, Container, Box, Button } from '@mui/material';
import Display from '../components/display.jsx';

function Chatroom() {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid black',
            width: '40%',
            minHeight: '80vh',
            margin: '0 auto',
            borderRadius: '12%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
            overflow: 'auto'
        }}>
            <Display />
            <br></br>
        </div>
    );
}

export default Chatroom;