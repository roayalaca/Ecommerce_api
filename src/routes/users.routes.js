// Router de express
const { Router } = require("express");
const {
  createUser,
  login,
  updateUser
} = require("../controllers/users.controlles");
const {
  createUserValidator,
  loginUserValidator,
  updateUserUserValidator
} = require("../validators/user.validators");
const authenticate = require("../middlewares/auth.middleware")


const router = Router();

router.post("/users", createUserValidator, createUser);

router.post("/users/login", loginUserValidator, login);

router.put('/users/:id', updateUserUserValidator, authenticate, updateUser)


module.exports = router;
