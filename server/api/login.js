const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');

const router = express.Router();
const { User } = require('../models/user');
const generateToken = require('../utils/token');

router.post('/', async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(1024),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error?.details[0]?.message);
  }

  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).send('Invalid email or password.');
  }

  const checkValidPassword = await bcrypt.compare(req.body.password, user.password);

  if (!checkValidPassword) {
    return res.status(400).send('Invalid email or password.');
  }

  const token = generateToken(user);

  res.send(token);
});

module.exports = router;
