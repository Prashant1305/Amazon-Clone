const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    timeOfOrder: {
        timestamp: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING",
        required: true
    },

    paid: {
        type: Boolean,
        default: false
    },

    items: [{ object_id: String, id: String, quantity: Number }],
});
const Order = new mongoose.model("order", orderSchema);
module.exports = Order;