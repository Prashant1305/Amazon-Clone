const mongoose = require("mongoose");
const User = require("./user-model");
const Product = require("./product-model");
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },

    address: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING",
        required: true
    },

    method_of_payment: {
        type: String,
        required: true
    },

    paid: {
        type: Boolean,
        default: false
    },

    items: [{
        product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Product
        },

        quantity: {
            type: Number,
            required: true
        }
    }],
}, { timestamp: true });
const Order = new mongoose.model("order", orderSchema);
module.exports = Order;