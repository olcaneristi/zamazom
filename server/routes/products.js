const express = require('express');
const { getProducts, getProduct } = require('../controllers/products');

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:slug', getProduct);

module.exports = productRouter;
