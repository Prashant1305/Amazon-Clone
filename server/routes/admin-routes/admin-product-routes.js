const express = require("express");
const validate = require("../../middleware/validate-middleware");
const { productSchema } = require("../../validator/product-validator");
const adminMiddleware = require("../../middleware/admin-middleware");
const {
    getAllProducts,
    addProduct,
    deleteProduct
} = require("../../controllers/admin-controller/admin-product-controller")


const router = express.Router();

router.get("/all", adminMiddleware, getAllProducts);
router.post("/add", validate(productSchema), adminMiddleware, addProduct);
router.delete("/delete/:id", adminMiddleware, deleteProduct);

module.exports = router;