const express = require('express');
const { addBanner, deleteBanner } = require("../../controllers/admin-controller/admin-banner-controller");
const validate = require("../../middleware/validate-middleware");
const { bannerSchema } = require("../../validator/banner-validator");
const adminMiddleware = require('../../middleware/admin-middleware');

const router = express.Router();

router.post('/add', validate(bannerSchema), adminMiddleware, addBanner);
router.delete('/delete/:id', adminMiddleware, deleteBanner);


module.exports = router;