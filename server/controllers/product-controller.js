const Product = require("../models/product-model");

const topTendiscountedProducts = async (req, res, next) => {
  try {
    const response = await Product.find().sort({ discount_percentage: -1 }).limit(10);
    console.log("topTendiscountedProducts data sent");
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const topTwentyRatedProducts = async (req, res, next) => {
  try {
    const response = await Product.find().sort({ rating: -1 }).limit(10);
    console.log("topTwentyRatedProducts data sent");
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { topTendiscountedProducts, topTwentyRatedProducts };
