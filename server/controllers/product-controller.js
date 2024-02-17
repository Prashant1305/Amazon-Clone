const Product = require("../models/product-model");

const topTendiscountedProducts = async (req, res, next) => {
  try {
    const response = await Product.find()
      .sort({ discount_percentage: -1 })
      .limit(10)
      .select({ _id: 1, url: 1, name: 1, discount_percentage: 1, category: 1 });
    console.log("topTendiscountedProducts data sent");
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const topTwentyRatedProducts = async (req, res, next) => {
  try {
    const response = await Product.find({})
      .sort({ rating: -1 })
      .limit(10)
      .select({ _id: 1, url: 1, name: 1, discount_percentage: 1, category: 1 });
    console.log("topTwentyRatedProducts data sent");
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSingleProductDetails = async (req, res, next) => {
  try {
    const _id = req.params.id;
    console.log("Single product all details sent");
    const singleProduct = await Product.find({ _id });
    if (!singleProduct) {
      res.status(202).json({ msg: "product not found" });
    }
    res.status(200).json({ msg: singleProduct });
  } catch (error) {
    next(error);
  }
};

const getProductsByCategory = async (req, res, next) => {
  try {
    const category = req.params.category;
    console.log(category);
    const response = await Product.find({ category: { $regex: category } });
    if (!response) {
      res.status(202).json({ msg: "category not found " });
    }
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const searchProducts = async (req, res, next) => {
  try {
    const { input } = req.body;
    console.log(req.body);
    const response = await Product.find();
    const temp = [];
    for (let i of response) {
      let searchString = "";
      searchString += i.id + " " + i.name + " " + i.category + " " + i.about;
      if (searchString.includes(input)) {
        temp.push(i);
      }
    }
    console.log("search response sent");
    res.status(200).json({ msg: temp });
  } catch (error) {
    next(error);
  }

}

module.exports = {
  topTendiscountedProducts,
  topTwentyRatedProducts,
  getSingleProductDetails,
  getProductsByCategory,
  searchProducts
};
