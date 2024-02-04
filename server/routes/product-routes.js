const express = require("express");
// const Product = require("../models/product-model");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
  topTendiscountedProducts,
  topTwentyRatedProducts,
} = require("../controllers/product-controller");
const validate = require("../middleware/validate-middleware");
const { productSchema } = require("../validator/product-validator");

const router = express.Router();

router.get("/all", getAllProducts);
router.post("/add", validate(productSchema), addProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/toptendiscountedProducts", topTendiscountedProducts);
router.get("/topTwentyRatedProducts", topTwentyRatedProducts);


module.exports = router;
