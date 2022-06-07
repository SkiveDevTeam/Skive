const express = require('express');
const PORT = 3000;
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../index.html')));

// Routers
const loginRouter = require('./routers/loginRouter');
const messageRouter = require('./routers/messageRouter');

app.use('/login', loginRouter);
app.use('/message', messageRouter);

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
