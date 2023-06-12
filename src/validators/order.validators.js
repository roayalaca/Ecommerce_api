const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createOrderValidator = [
  check("totalPrice", "Error con el campo totalPrice")
    .exists()
    .withMessage("Username es obligatorio")
    .notEmpty()
    .withMessage("Username no debe estar vacio"),
  check("user_id", "Error con el campo user_id")
    .exists()
    .withMessage("Description es obligatorio")
    .notEmpty()
    .withMessage("Description no debe estar vacio"),
  validateResult,
];

module.exports = { createOrderValidator };
