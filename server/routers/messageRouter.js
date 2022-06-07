const express = require('express');
//Message Router controls messages added to our chatroom
const messageRouter = express.Router();
const messageController = require('../controllers/messageController');

//routes
messageRouter.post('/', messageController.addMessage, (req, res) => {
  res.status(200).json(res.locals.message);
});

messageRouter.get('/', messageController.getMessages, (req, res) => {
  res.status(200).json(res.locals.messages);
});

module.exports = messageRouter;
