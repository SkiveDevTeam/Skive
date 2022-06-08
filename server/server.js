const express = require('express');
const PORT = 3000;
const SOCKET_PORT = 3036;
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../index.html')));

// websocket
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
http.listen(SOCKET_PORT, () => {
  console.log(`listening on *:${SOCKET_PORT}`);
});
io.on('connection', (socket) => {
  console.log(`new client connected: ${socket.id}`);
  socket.on('send-message', message => {
    console.log(message);
    io.emit('message', message);
  });
});


// Routers
const loginRouter = require('./routers/loginRouter');
const messageRouter = require('./routers/messageRouter');

app.use('/login', loginRouter);
app.use('/messages', messageRouter);

// 404 error handler
app.use('*', (req, res) => res.status(404).send('Page does not exist'));
//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Middleware error',
    status: 500,
    message: { err: 'An error has occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening at: ${PORT}`);
});

module.exports = app;
