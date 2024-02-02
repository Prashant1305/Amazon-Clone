const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate-middleware");
const { home, register, login } = require("../controllers/auth-controller");
const { registerSchema, loginSchema } = require("../validator/user-validator");

router.get("/", home);
router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);



module.exports = router;