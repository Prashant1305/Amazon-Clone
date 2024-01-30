const express = require('express');
const Banner = require("../models/banner-model");
const { getAllBanners, addBanner, deleteBanner } = require("../controllers/banner-controller");
const validate = require("../middleware/validate-middleware");
const { bannerSchema } = require("../validator/banner-validator");


const router = express.Router();
router.get('/banner', getAllBanners);
router.post('/banner/add', validate(bannerSchema), addBanner);
router.delete('/banner/delete/:id', deleteBanner);


module.exports = router;