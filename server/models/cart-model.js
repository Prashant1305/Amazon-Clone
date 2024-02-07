const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    object_ids: [String],
});
const cart = new mongoose.model("cart", cartSchema);
module.exports = cart;