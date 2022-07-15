const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const register = require('./routes/register');
const login = require('./routes/login');
const productRouter = require('./routes/products');

app.use(cors());
app.use(express.json());

app.use('/auth/login', login);

app.use('/auth/register', register);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/products', productRouter);

const port = process.env.PORT || 8080;
const uri = process.env.DB_URI;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.log('Connection failed', err.message);
  });
