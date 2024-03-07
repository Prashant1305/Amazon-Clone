const Order = require("../models/order-model");

const addOrder = async (req, res, next) => {
    try {
        const clientOrderItems = req.body;
        // console.log(req.clientAuthData);
        const email = req.clientAuthData.email;
        const clientOrder = { ...clientOrderItems, email };
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