const User = require("../models/user-model");
const Cart = require("../models/cart-model");
const Product = require('../models/product-model');
const AddressInfo = require('../models/address-model');

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
        const { items } = req.body;
        const cartExist = await Cart.findOne({ email });
        if (cartExist) {
            await Cart.deleteOne({ email });
        }
        await Cart.create({ email, items });
        console.log("cart Data poasted to mongoDb");
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
        } else {
            let data = [];
            for (let i of cartMongoData.items) {
                let detail = await Product.find({ _id: i.object_id }).select({ _id: 1, id: 1, url: 1, name: 1, discounted_price: 1, stock_quantity: 1 });
                if (detail) {
                    let ans = detail[0];
                    let quantity = i.quantity;
                    // console.log(ans);
                    data.push({ ...ans._doc, quantity });
                }
            }
            console.log("cart data sent");
            res.status(200).json({ msg: data });
        }

    } catch (error) {
        next(error);
    }
}

const addAddress = async (req, res, next) => {
    try {
        const _id = req.clientAuthData._id;
        // let userExist = await AddressInfo.findOne({ _id });

        const addressList = await AddressInfo.find({ user: _id });
        // console.log(addressList)
        // console.log(_id)

        // changing all defaultAddress to false for this user
        const temp = await AddressInfo.updateMany(
            { user: _id },
            { $set: { "deliveryAddress.defaultAddress": false } }
        );
        console.log("updating address", temp);

        const newAddress = { user: _id, deliveryAddress: req.body };
        const addressCreated = await AddressInfo.create(newAddress);
        // console.log(addressCreated);
        res.status(200).json({ msg: "Address Successfully created", _id: addressCreated._id });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

const getAddress = async (req, res, next) => {
    try {
        const _id = req.clientAuthData._id;
        const addressExist = await AddressInfo.find({ user: _id });
        const addressList = addressExist.map((address) => {
            return { ...address.deliveryAddress, _id: address._id }
        })
        if (addressExist) {
            return res.status(200).json({ msg: "Some address were Found", addressList });
        } else {
            return res.status(202).json({ msg: "no address found" });
        }
    } catch (error) {
        next(error);
    }
}

const updateAddress = async (req, res, next) => {
    try {
        const user_id = req.clientAuthData._id;
        const address_id = req.body._id;
        const updatedAddress = { ...req.body };
        delete (updatedAddress._id)

        let usersOtherAddress = await AddressInfo.find({ user: user_id });

        let newDefaultAddressFeild = req.body.defaultAddress;
        let oldDefaultAddressFeild = await AddressInfo.findOne({ _id: address_id });
        oldDefaultAddressFeild = oldDefaultAddressFeild.deliveryAddress.defaultAddress;

        if (newDefaultAddressFeild && !oldDefaultAddressFeild) { // address set to default,then set other address default address to false;
            await AddressInfo.updateMany(
                { user: user_id },
                { $set: { "deliveryAddress.defaultAddress": false } }
            );
        }

        // updating address provided

        const updateResponse = await AddressInfo.updateOne({ _id: address_id }, { $set: { deliveryAddress: updatedAddress } });
        console.log(updateResponse);
        res.status(200).json({ msg: "address updated succesfully" });
    } catch (error) {
        next(error);
    }
}

const removeAddress = async (req, res, next) => {

    const _id = req.clientAuthData._id;
    // console.log(req.body._id)
    const deltetedAddress = await AddressInfo.deleteOne({ "_id": req.body._id });
    // console.log(deltetedAddress);
    if (deltetedAddress.modifiedCount === 0) {
        return res.status(201).json({ msg: "failed to delete address" });
    }
    res.status(200).json({ msg: "Address deleted succesfully" })
}

module.exports = { home, register, login, getClientData, postCartData, getCartData, addAddress, getAddress, updateAddress, removeAddress };