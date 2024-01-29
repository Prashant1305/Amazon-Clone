const express = require('express');
const Banner = require("../models/banner-model");
const { getAllBanners, addBanner } = require("../controllers/banner-controller");
const validate = require("../middleware/validate-middleware");
const { bannerSchema } = require("../validator/banner-validator");


const router = express.Router();
router.get('/banner', getAllBanners);
router.get('/banner/add', validate(bannerSchema), addBanner);

module.exports = router;