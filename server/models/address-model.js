const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    deliveryAddress: [{
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
        }
    }]
});
const AddressInfo = new mongoose.model("addressInfo", addressSchema);
module.exports = AddressInfo;