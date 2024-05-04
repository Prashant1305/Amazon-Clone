const express = require("express");
const validate = require("../../middleware/validate-middleware");
const { productSchema } = require("../../validator/product-validator");
const adminMiddleware = require("../../middleware/admin-middleware");
const { getAllProducts, addProduct, deleteProduct, uploadImageToCloudinary, deleteImageFromCloudinary
} = require("../../controllers/admin-controller/admin-product-controller");

const { upload } = require("../../middleware/multer-middleware");

const router = express.Router();

router.get("/all", adminMiddleware, getAllProducts);
router.post("/addproduct", validate(productSchema), adminMiddleware, addProduct);
router.delete("/delete/:id", adminMiddleware, deleteProduct);
router.post("/uploadImages", adminMiddleware, upload.single('myfile'), uploadImageToCloudinary);
router.post("/deleteImage", adminMiddleware, deleteImageFromCloudinary);



module.exports = router;
