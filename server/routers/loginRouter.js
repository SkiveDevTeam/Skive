const express = require('express');

const loginRouter = express.Router();
const loginController = require('../controllers/loginController');

//routes

loginRouter.post(
  '/',
  loginController.login,
  loginController.setCookie,
  (req, res) => {
    res.status(200).json(res.locals.authentication); //res.redirect('/chatroom')
  }
);

loginRouter.post(
  '/signup',
  loginController.createUser,
  loginController.login,
  loginController.setCookie,
  (req, res) => {
    res.status(200).json(res.locals.addedUser);
  }
);

module.exports = loginRouter;
