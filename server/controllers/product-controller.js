const Product = require("../models/banner-model");
const getAllProducts = async (req, res, next) => {
  try {
    const response = await Product.find();
    console.log(response);
    res.status(200).json({ msg: response });
  } catch (error) {
    console.log(`error from Product controller:${error}`);
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const { url, name } = req.body;
    const bannerExist = await Product.findOne({ url }); // {url: url}
    if (bannerExist) {
      res.status(202).json({ msg: "banner already exist" });
    } else {
      await Product.create({ url, name }); // {url: url,name: name}
      return res.status(200).json({ msg: "Product added succesfully" });
    }
  } catch (error) {
    next(error);
  }
};

const deletProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const productExist = await Product.findOne({ _id: id });
    if (!productExist) {
      res.status(202).json({ msg: "Product does not exist" });
    } else {
      await Product.deleteOne({ _id: id });
      res.status(200).json({ msg: "Product deleted succesfully" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllProducts, addProduct, deletProduct };
