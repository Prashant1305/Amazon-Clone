const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    // console.log(token);
    if (!token) {
        return res.status(401).json({ message: "unauthorised HTTP, Token not provided" });
    }
    const jwtToken = token.replace("Bearer ", "");
    // console.log("token is: ", jwtToken);
    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        // console.log("isVerified: ", isVerified);
        const clientAuthData = await user.findOne({ "email": isVerified.email }).select({ password: 0 })
        // console.log(clientAuthData);
        req.clientAuthData = clientAuthData;
        next();
    } catch (error) {
        next(error);
    }
};
module.exports = authMiddleware;