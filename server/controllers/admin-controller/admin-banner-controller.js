const Banner = require("../../models/banner-model");
const addBanner = async (req, res, next) => {
    // console.log("addBanner called");
    try {
        const { url, name } = req.body;
        const bannerExist = await Banner.findOne({ url }); // {url: url}
        if (bannerExist) {
            // const error = {
            //     status: 400,
            //     message: "banner already exist",
            //     extraDeatils: "error from client input"
            // }
            // next(error);
            res.status(202).json({ msg: "banner already exist" });
        } else {
            await Banner.create({ url, name }); // {url: url,name: name}
            return res.status(200).json({ msg: "banner added succesfully" });
        }

    } catch (error) {
        next(error);
    }
}

const deleteBanner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const bannerExist = await Banner.findOne({ _id: id });
        if (!bannerExist) {
            // const error = {
            //     status: 400,
            //     message: "banner does not exist",
            //     extraDeatils: "error from client input"
            // }
            // next(error);
            res.status(202).json({ msg: "banner does not exist" });
        } else {
            await Banner.deleteOne({ _id: id });
            res.status(200).json({ msg: "banner deleted succesfully" });
        }
    } catch (error) {
        next(error)
    }
}
module.exports = { addBanner, deleteBanner };