const express = require("express");
// const Product = require("../models/product-model");
const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/product-controller");
const validate = require("../middleware/validate-middleware");
const { productSchema } = require("../validator/product-validator");
const router = express.Router();
router.get("/product/all", getAllProducts);
router.post("/product/add", validate(productSchema), addProduct);
router.delete("/product/delete/:id", deleteProduct);

module.exports = router;
