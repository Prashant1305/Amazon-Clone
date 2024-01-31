const User = require("../models/user-model");

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

module.exports = { home, register, login };