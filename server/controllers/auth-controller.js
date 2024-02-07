const User = require("../models/user-model");
const Cart = require("../models/cart-model");
const Product = require('../models/product-model');

const home = async (req, res, next) => {
    res.status(200).json({ msg: "response from server" });
}

const register = async (req, res, next) => {
    try {
        const { username, email, phone, password } = req.body;
        // console.log({ username, email, phone, password });
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(202).json({ msg: "email already registered" });
        }
        const userCreated = await User.create({ username, email, phone, password });
        res.status(200).json({ msg: "resistraion succesfull" });

    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(202).json({ msg: "wrong email" });
        }
        console.log(userExist);
        const isPasswordValid = await userExist.myCompare(password);
        if (!isPasswordValid) {
            res.status(202).json({ msg: "wrong email or password" });
        }
        else {
            res.status(200).json({ msg: "Login Successfull", token: await userExist.generateToken() });
        }

    } catch (error) {
        next(error);
    }
}

const getClientData = async (req, res, next) => {
    return res.status(200).json({ msg: req.clientAuthData });
}

const postCartData = async (req, res, next) => {
    try {
        const email = req.clientAuthData.email;
        const { object_ids } = req.body;
        const cartExist = await Cart.findOne({ email });
        if (cartExist) {
            await Cart.deleteOne({ email });
        }
        await Cart.create({ email, object_ids });
        return res.status(200).json({ msg: "cart updateed" });

    } catch (error) {
        next(error);
    }
}

const getCartData = async (req, res, next) => {
    try {
        const email = req.clientAuthData.email;
        const cartMongoData = await Cart.findOne({ email });
        if (!cartMongoData) {
            res.status(202).json({ msg: "No Cart Data found" });
        }
        let data = [];
        for (let i of cartMongoData.object_ids) {
            let detail = await Product.find({ _id: i }).select({ _id: 1, url: 1, name: 1, discounted_price: 1, stock_quantity: 1 });
            data.push(detail[0]);
        }
        console.log("cart data sent");
        res.status(200).json({ msg: data });
    } catch (error) {
        next(error);
    }
}

module.exports = { home, register, login, getClientData, postCartData, getCartData };