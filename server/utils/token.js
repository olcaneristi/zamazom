const jwt = require('jsonwebtoken');

const generateToken = user => {
  const jwtKey = process.env.JWT_KEY;

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    jwtKey,
  );

  return token;
};

module.exports = generateToken;
