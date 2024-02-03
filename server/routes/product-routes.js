const express = require("express");
// const Product = require("../models/product-model");
const {
  getAllBanners,
  addBanner,
  deleteBanner,
} = require("../controllers/banner-controller");
const validate = require("../middleware/validate-middleware");
const { productSchema } = require("../validator/product-validator");

const router = express.Router();
router.get("/banner", getAllBanners);
router.post("/banner/add", validate(productSchema), addBanner);
router.delete("/banner/delete/:id", deleteBanner);

module.exports = router;
