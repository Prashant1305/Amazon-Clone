const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true,
  },

  stock_quantity: {
    type: Number,
    required: false,
    default: 1
  },

  category: {
    type: String,
    required: true,
  },

  actual_price: {
    type: Number,
    required: true,
  },

  discounted_price: {
    type: Number,
    required: true,
  },

  discount_percentage: {
    type: Number,
    required: true,
  },

  about: {
    type: String,
    required: true,

  },

  url: [{
    type: String,
    required: true,
  }
  ],

  rating: {
    type: Number,
    required: true,
  },

  rating_count: {
    type: Number,
    required: true,
  },
},
  { timestamps: true }
);
const Product = new mongoose.model("product", productSchema);
module.exports = Product;
