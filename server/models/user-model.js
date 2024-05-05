const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true

    },
    phone: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true

    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

userSchema.pre("save", async function (next) { // cannot use arrow as "this" value will be undefined here
    const user = this;
    try {
        const saltRound = 10;
        console.log(user);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});

//JWT
userSchema.methods.generateToken = async function () { // cannot use arrow as "this" value will be undefined here
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email
        },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            });
    } catch (error) {
        console.log(error);
    }
};

//password verificaton
userSchema.methods.myCompare = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = new mongoose.model("Users", userSchema);
module.exports = User;