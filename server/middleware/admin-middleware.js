const jwt = require("jsonwebtoken");
const user = require("../models/user-model");

const adminMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        const status = 401;
        const message = "Token not provided";
        const extraDetails = "error from backened";
        const error = {
            status,
            message,
            extraDetails
        };
        next(error);
    }
    else {
        // assuming token is in the format Bearer <jwtToken> .
        // removing the "Bearer " prefix
        const jwtToken = token.replace("Bearer ", "");
        try {
            const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY); // this returns decrypted payload in jwt
            // console.log("isVerified: ", isVerified);

            const userData = await user.findOne({ "email": isVerified.email }).select({ password: 0 });
            if (!userData.isAdmin) {
                return res.status(401).json({ message: "Admin privilages not provided" });
            }
            req.userData = userData; // passing data by adding property in request
            console.log("From adminMiddleware: ", userData);
            next();

        } catch (error) {
            return res.status(401).json({ message: "unauthorised, invalid token" });
        }
    }


}
module.exports = adminMiddleware;