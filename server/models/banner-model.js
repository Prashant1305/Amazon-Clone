const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    }
});
const Banner = new mongoose.model("banners", bannerSchema);
module.exports = Banner;