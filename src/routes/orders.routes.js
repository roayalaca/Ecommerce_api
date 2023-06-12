// Router de express
const { Router } = require("express");
const { createOrder, getOrders } = require("../controllers/order.controllers");
const { createOrderValidator } = require("../validators/order.validators");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/orders", createOrderValidator, authenticate, createOrder);

router.get("/all/orders/:user_id", authenticate, getOrders);


module.exports = router;
