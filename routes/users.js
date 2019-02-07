const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { passport, sign } = require('../auth');
const db = require('../models');
console.log(db)


usersRouter.get('/', async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

usersRouter.get('/:id', async (req, res) => {
  try {
    const thisUser = await db.User.findByPk(req.params.id);
    res.json(thisUser);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

usersRouter.post('/', async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    console.log(user.username)
    const { admin, id, username, password } = user.dataValues;
    const token = sign({
      id,
      username,
      password
    });
    const userData = {
      admin,
      id,
      username
    }
    res.json({ token, user: userData });
  } catch (e) {
    console.log(e);
    res.status(500).json({ msg: e.message });
  }
});

usersRouter.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.User.find({ where: { username } });
    const passwordValid = await bcrypt.compare(password, user.password);
    const { admin, cart, id, wishlist } = user;
    if (passwordValid) {
      const token = sign({
        id,
        username,
      });
      const userData = {
        admin,
        cart,
        id,
        username,
        wishlist
      }
      res.json({ token, user: userData });
    } else {
      throw Error('Invalid credentials');
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
});

usersRouter.put('/:id', async (req, res) => {
  console.log(req.body);
  try {
    const response = db.User.update(req.body, {
      where: { id: req.params.id }
    });
    res.send(response);
  } catch (e) {
    console.log(e);
  }
})

module.exports = usersRouter;
