const Banner = require("../models/banner-model");
const getAllBanners = async (req, res, next) => {
    try {
        const response = await Banner.find();
        console.log("banner data sent");
        res.status(200).json({ msg: response });

    } catch (error) {
        console.log(`error from banner controller:${error}`);
        next(error);
    }
}


module.exports = { getAllBanners };