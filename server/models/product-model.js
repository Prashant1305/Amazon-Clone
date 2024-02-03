const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    requires: true,
  },
  category: {
    type: String,
    requires: true,
  },
  price: {
    type: Number,
    requires: true,
  },
  rating: {
    type: Number,
    requires: true,
  },
  about: {
    type: String,
    requires: true,
  },
  rating_count: {
    type: Number,
    requires: true,
  },

  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
});
const product = new mongoose.model("product", productSchema);
module.exports = product;
