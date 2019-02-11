const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const { passport } = require('./auth');
const stripe = require("stripe")("sk_test_nkXoZ50lGC2kqNBjXX2v78fS");
const jsonParser = bodyParser.json();

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

app.post("/charge", jsonParser, async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.total * 1000,
      currency: "usd",
      description: "An example charge",
      source: req.body.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});

app.use(routes);

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
