// const express = require('express');
const { Watch } = require('../models');
// const watchesRouter = express();
const watchesRouter = require('express').Router();

watchesRouter.get('/', async (req, res) => {
  try {
    const places = await Watch.findAll({});
    res.json(places);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

watchesRouter.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const place = await Watch.findByPk(id);
    res.json(place);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message});
  }
});

module.exports = watchesRouter;
