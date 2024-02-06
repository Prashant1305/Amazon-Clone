const express = require('express');
const Banner = require("../models/banner-model");
const { getAllBanners } = require("../controllers/banner-controller");



const router = express.Router();
router.get('/banner', getAllBanners);


module.exports = router;