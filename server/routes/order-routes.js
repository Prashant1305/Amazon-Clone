const express = require("express");
const { addOrder } = require("../controllers/order-controller");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();
router.post("/addOrder", authMiddleware, addOrder);

module.exports = router;