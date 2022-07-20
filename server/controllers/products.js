const Products = require('../models/products');

const getProducts = async (req, res) => {
  try {
    const PAGE_SIZE = 8;
    const page = parseInt(req.query.page || '0');
    const total = await Products.countDocuments();
    const products = await Products.find()
      .limit(PAGE_SIZE)
      .skip(page * PAGE_SIZE);
    res.status(200).json({ totalPages: Math.ceil(total / PAGE_SIZE), products });
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
