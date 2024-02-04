const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,

    
  },
  price: {
    type: Number,
    required: true,


  },
  rating: {
    type: Number,
    required: true,
   
  },
  about: {
    type: String,
    required: true,

  },
  rating_count: {
    type: Number,
    required: true,

  },

  url: {
    type: String,
    required: true,

  },
  name: {
    type: String,
    required: true,

  },
});
const product = new mongoose.model("product", productSchema);
module.exports = product;
