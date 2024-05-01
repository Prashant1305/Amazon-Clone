const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate-middleware");
const {
  home,
  register,
  login,
  getClientData,
  postCartData,
  getCartData,
  addAddress,
  getAddress,
  updateAddress,
  removeAddress
} = require("../controllers/auth-controller");
const { registerSchema, loginSchema } = require("../validator/user-validator");
const { addressSchema } = require("../validator/address-validator")
const authMiddleware = require("../middleware/auth-middleware");

router.get("/", home);
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/clientdata", authMiddleware, getClientData);
router.post("/postcartdata", authMiddleware, postCartData);
router.get("/getcartdata", authMiddleware, getCartData);
router.post("/addaddress", authMiddleware, addAddress);
router.get("/getaddress", authMiddleware, getAddress);
router.post("/updateaddress", authMiddleware, validate(addressSchema), updateAddress);
router.post("/removeaddress", authMiddleware, removeAddress);


module.exports = router;
