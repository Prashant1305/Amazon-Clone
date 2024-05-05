const mongoose = require("mongoose");
const User = require("./user-model");
const Product = require("./product-model");
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },

    address: {
        fullname: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        flat: {
            type: String,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            default: ""
        },
        town: {
            type: String,
            default: ""
        },
        state: {
            type: String,
            required: true
        },
        defaultAddress: {
            type: Boolean,
            default: false
        }
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
},
    { timestamps: true }
);
const Order = new mongoose.model("order", orderSchema);
module.exports = Order;