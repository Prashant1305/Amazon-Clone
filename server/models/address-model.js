const mongoose = require('mongoose');
const User = require('./user-model');
const addressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    deliveryAddress: {
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
    }
},
    { timestamps: true }
);
const AddressInfo = new mongoose.model("addressInfo", addressSchema);
module.exports = AddressInfo;