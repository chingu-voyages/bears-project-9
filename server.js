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
// app.use(require("body-parser").text());

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(require("body-parser").text());

if (process.env.NODE_ENV === "production")
  app.use(express.static('client/build'))

app.get('/verify', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'logged in' });
});

app.get('/currentuser', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ msg: 'logged in', user: req.user });
});

app.post("/charge", jsonParser, async (req, res) => {
  console.log('charge');
  console.log(req.body);
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });
console.log('status ',status);
    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});


app.use(routes);

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
