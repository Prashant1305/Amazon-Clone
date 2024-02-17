const express = require("express");
const {
  topTendiscountedProducts,
  topTwentyRatedProducts,
  getSingleProductDetails,
  getProductsByCategory,
  searchProducts,
} = require("../controllers/product-controller");

const router = express.Router();

router.get("/toptendiscountedProducts", topTendiscountedProducts);
router.get("/topTwentyRatedProducts", topTwentyRatedProducts);
router.get("/getsingleproductdetails/:id", getSingleProductDetails);
router.get("/getProductsByCategory/:category", getProductsByCategory);
router.post("/search", searchProducts);

module.exports = router;
