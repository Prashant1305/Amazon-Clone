const Banner = require("../models/banner-model");
const getAllBanners = async (req, res, next) => {
    try {
        const response = await Banner.find();
        console.log(response);
        res.status(200).json({ msg: response });

    } catch (error) {
        console.log(`error from banner controller:${error}`);
        next(error);
    }
}
const addBanner = async (req, res, next) => {
    // console.log("addBanner called");
    try {
        const { url, name } = req.body;
        const bannerExist = await Banner.findOne({ url }); // {url: url}
        if (bannerExist) {
            const error = {
                status: 400,
                message: "banner already exist",
                extraDeatils: "error from client input"
            }
            next(error);
        } else {
            await Banner.create({ url, name }); // {url: url,name: name}
            return res.status(200).json({ msg: "banner added succesfully" });
        }

    } catch (error) {
        next(error);
    }
}
module.exports = { getAllBanners, addBanner };