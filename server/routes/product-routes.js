const express = require("express");
const { topTendiscountedProducts, topTwentyRatedProducts, getSingleProductDetails } = require("../controllers/product-controller");

const router = express.Router();

router.get("/toptendiscountedProducts", topTendiscountedProducts);
router.get("/topTwentyRatedProducts", topTwentyRatedProducts);
router.get("/getsingleproductdetails/:id", getSingleProductDetails);


module.exports = router;
