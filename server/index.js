const express = require('express');
const cors = require('cors');
const products = require('./products');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const register = require('./routes/register');
const login = require('./routes/login');

app.use(cors());
app.use(express.json());

app.use('/auth/login', login);

app.use('/auth/register', register);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:slug', (req, res) => {
  const slugs = req.params.slug;
  const pro = products.filter(p => p.slug === slugs);
  res.send(pro);
});

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
