const Users = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const transporter = require("../utils/mailer");

const createUser = async (req, res, next) => {
  try {
  
    const { username, email, password, avatar } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    await Users.create({ username, email, password: hashed, avatar });
    res.status(201).send();
    transporter .sendMail({
      from: "alanayaca@gmail.com",
      to: email,
      subject: "Confirmación creación de cuenta",
      text: `Buen día ${username}. Gracias por registrarse, este es un mensaje de confirmación.`,
    })
    .then(() => console.log("mensaje enviado"))
    .catch((error) => console.log(error));

  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await Users.findOne({
      where: { email },
    });

    if (!user) {
      return next({
        status: 400,
        name: "Invalid email",
        message: "user not exist",
      });
    }

    console.log(user)

    
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return next({
        status: 400,
        name: "Invalid password",
        message: "The password does not match with user email",
      });
    }

    // no responder la contraseña

    // debemos devolver un token para que el usuario loggeado
    // pueda acceder a los recursos del back

    // Genear token
    const userData = { username: user.username, email, avatar: user.avatar };

    const token = jwt.sign(userData, "parangaricutirimicuaro", {
      algorithm: "HS512",
      expiresIn: "5m",
    });
    // agregar el token en userData
    userData.token = token;

    res.json(userData);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {

    const {id} = req.params;
    const { username, avatar } = req.body;
    await Users.update({ username, avatar }, {
      where: {id}
    });

    res.status(204).send()
    
  } catch (error) {
    next(error);
  }
}

const validateEmail = async (req, res, next) => {
  try {
    const { token } = req.body;

    const decoded = jwt.verify(token, "parangaricutirimicuaro", {
      algorithms: "HS512",
    });
    // decoded = {email, username}

    if (!decoded) {
      next({
        status: 400,
        name: "Error de verificación",
        message: "Algo sucedio con la verificació, solicite nuevamente",
      });
    }

    await Users.update(
      { validUser: true },
      {
        where: { email: decoded.email },
      }
    );

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  login,
  validateEmail,
  updateUser
};
