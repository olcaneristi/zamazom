const Products = require('../models/products');

const getProducts = async (req, res) => {
  try {
    const product = await Products.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Products.find({ slug });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProduct,
};
