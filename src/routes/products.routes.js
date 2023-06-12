// Router de express
const { Router } = require("express");
const { createProduct, getProductsGreater0, updateProduct } = require("../controllers/product.controllers");
const authenticate = require("../middlewares/auth.middleware")
const { createProductValidator, updateProductValidator } = require("../validators/product.validators")

const router = Router();

router.post("/product", createProductValidator, authenticate, createProduct);

router.get("/allproducts", getProductsGreater0);

router.put("/products/:id", updateProductValidator, authenticate, updateProduct);


module.exports = router;
