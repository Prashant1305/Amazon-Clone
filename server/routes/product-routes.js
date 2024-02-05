const express = require("express");
const { topTendiscountedProducts, topTwentyRatedProducts } = require("../controllers/product-controller");

const router = express.Router();

router.get("/toptendiscountedProducts", topTendiscountedProducts);
router.get("/topTwentyRatedProducts", topTwentyRatedProducts);

module.exports = router;
