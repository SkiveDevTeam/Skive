const db = require('../models/model.js');

const loginController = {};

//the first time upon user sign up, we create the user in out database
loginController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  //Default => is the unique ID (_id) in the database  that is being returned (* returns single user from the query in this case)
  db.query('INSERT INTO users VALUES (DEFAULT, $1, $2) RETURNING *', [
    username,
    password,
  ])
    .then((data) => {
      res.locals.addedUser = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'loginController.createUser',
        message: { err: err },
      })
    );
};

//when an existing user logs in, we verify their username and password
loginController.login = (req, res, next) => {
  const queryStr = 'SELECT * FROM users WHERE username = $1';
  const { username, password } = req.body;

  db.query(queryStr, [username])
    .then((data) => {
      // if password in the database and password provided do not match, redirect to signup page
      // res.redirect('/signup')
      if (password !== data.rows[0].password) {
        res.locals.authentication = {
          username: null,
          message: 'Your password is invalid',
        };
        return next();
      }
      res.locals.authentication = {
        id: data.rows[0].id,
        username: data.rows[0].username,
        message: 'You are logged in',
      };
      return next();
    })
    .catch((err) =>
      next({
        log: 'loginController.login',
        message: { err: err },
      })
    );
};

// Set a cookie that lives for up to 24hrs ?
loginController.setCookie = (req, res, next) => {
  const { username } = req.body;
  //creating a cookie and attaching to our response, this is  cookie-parser
  // first param: key
  // second param: value assigned to cookie
  // third: options object
  res.cookie(`ssid`, username, {
    // 24 hrs
    maxAge: 1000 * 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });
  return next();

  //we don't need an error handler because if the user got to this controller, it means it signed in successfully
};

loginController.checkCookie = (req, res, next) => {
  // cookies live in req.cookies... this is how cookie-parser works
  console.log(req.cookies.ssid);
};
//Feature - add deleteUser, updatePassword, logout

module.exports = loginController;
