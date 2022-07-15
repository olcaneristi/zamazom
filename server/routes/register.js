const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');

const router = express.Router();
const { User } = require('../models/user');
const generateToken = require('../utils/token');

router.post('/', async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required().min(6).max(255),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(1024),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).send(error?.details[0]?.message);
  }

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(400).send('User already registered');
  }

  user = new User(req.body);

  console.log(user);

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = generateToken(user);

  res.send(token);
});

module.exports = router;
