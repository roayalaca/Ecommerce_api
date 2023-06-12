// check --> verificar/ revisar / chequear / validar
const { check } = require("express-validator");
const validateResult = require("../utils/validate");

const createProductValidator = [
  check("name", "Error con el campo username")
    .exists()
    .withMessage("Username es obligatorio")
    .notEmpty()
    .withMessage("Username no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ max: 40 })
    .withMessage("El username debe tener máximo 40 caracteres"),
  check("description", "Error con el campo description")
    .exists()
    .withMessage("Description es obligatorio")
    .notEmpty()
    .withMessage("Description no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ max: 100 })
    .withMessage("El username debe tener máximo 100 caracteres"),
  check("price", "Error con el price")
    .exists()
    .withMessage("Price es obligatorio")
    .notEmpty()
    .withMessage("Price no puede estar vacio"),
  check("availableQty", "Error con el availableQty")
    .exists()
    .withMessage("AvailableQty es obligatorio")
    .notEmpty()
    .withMessage("AvailableQty no puede estar vacio"),
  check("status", "Error con el campo status")
    .exists()
    .withMessage("Status es obligatorio")
    .notEmpty()
    .withMessage("Status no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ max: 13 })
    .withMessage("El status debe tener máximo 13 caracteres"),
  check("user_id", "Error con el userId")
    .exists()
    .withMessage("userId es obligatorio")
    .notEmpty()
    .withMessage("userId no puede estar vacio"),
  check("productImage", "Error con el productImage")
    .exists()
    .withMessage("productImage es obligatorio")
    .notEmpty()
    .withMessage("productImage no puede estar vacio"),
  validateResult,
];

const updateProductValidator = [
  check("description", "Error con el campo description")
    .exists()
    .withMessage("Description es obligatorio")
    .notEmpty()
    .withMessage("Description no debe estar vacio")
    .isString()
    .withMessage("El tipo de dato debe ser string")
    .isLength({ max: 100 })
    .withMessage("El username debe tener máximo 100 caracteres"),
   validateResult,
];



module.exports = { createProductValidator, updateProductValidator };
