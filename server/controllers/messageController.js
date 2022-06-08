const db = require('../models/model.js');

const messageController = {};

//Message controller adds messages from the frontend to our database
messageController.addMessage = (req, res, next) => {
  const { username, message } = req.body;

  db.query('INSERT INTO messages VALUES (DEFAULT, $1, $2) RETURNING *', [
    username,
    message,
  ])
    .then((data) => {
      console.log(data);
      res.locals.message = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'messageController.addMessage',
        message: { err: err },
      })
    );
};

messageController.getMessages = (req, res, next) => {
  db.query('SELECT * FROM messages ORDER BY created_at DESC LIMIT 30')
    .then((data) => {
      console.log(data);
      res.locals.messages = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'messageController.addMessage',
        message: { err: err },
      })
    );
};

//Feature - add deleteMessage, editMessage

module.exports = messageController;
