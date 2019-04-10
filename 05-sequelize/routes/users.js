var express = require('express');
var router = express.Router();
const User = require('../models').user;

/* GET users listing. */
/**
 * return all users in database
 */
router.get('/', async function(req, res, next) {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
