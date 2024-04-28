const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    items: [{ object_id: String, quantity: Number }],
});
const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;