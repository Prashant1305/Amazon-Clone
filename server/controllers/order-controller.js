const Order = require("../models/order-model");

const addOrder = async (req, res, next) => {
    try {
        const clientOrderDetails = req.body;
        // console.log(req.clientAuthData);
        const user = req.clientAuthData._id;
        const clientOrder = { ...clientOrderDetails, user };
        await Order.create(clientOrder);
        res.status(200).json({ msg: "Order successfully placed" })

    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    addOrder
};