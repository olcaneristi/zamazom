const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  id: String,
  title: String,
  name: String,
  wasPriceRange: Number,
  isPriceRange: Number,
  description: String,
  coverImage: String,
  images: Array,
  inStock: Boolean,
  slug: String,
  rating: Number,
  ratingCount: Number,
  properties: Object,
  variantList: Array,
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;
