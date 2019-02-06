const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const { passport } = require('./auth');


const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production")
  app.use(express.static('client/build'))

app.get('/verify', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'logged in' });
});

app.get('/currentuser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'logged in', user: req.user });
});

app.use(routes);

console.log("+++++++the DB URL+++++++++");
console.log(process.env.DATABASE_URL);
console.log("+++++++the WHOLE ENV+++++++++");
console.log(process.env);

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });