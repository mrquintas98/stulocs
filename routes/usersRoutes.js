const express = require('express');
const router = express.Router();
const User = require('../models/usersModel');

// GET all users
router.get('/users', async function(req, res, next) {
  try {
    console.log("Get all users");
    let result = await User.getAll();
    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// GET a user by ID
router.get('/users/:id', async function(req, res, next) {
  try {
    console.log(`Get user with ID: ${req.params.id}`);
    let result = await User.getUser(req.params.id);
    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// POST create a new user
router.post('/users/new/:username/:password', async function(req, res, next) {
    try {
      const { username, password } = req.params;
      console.log("Create a new user");
      let result = await User.createUser({ username, password });
      res.status(result.status).send(result.result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });


// DELETE delete a user
router.delete('/users/delete/:id', async function(req, res, next) {
  try {
    console.log(`Delete user with ID: ${req.params.id}`);
    let result = await User.deleteUser(req.params.id);
    res.status(result.status).send(result.result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;