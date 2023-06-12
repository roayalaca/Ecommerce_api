const Products = require("../models/products.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Op } = require("sequelize");
const Users = require("../models/users.model")

const createProduct = async (req, res, next) => {
  try {
    // no importa que tan largo sea el nombre de tu funcion o variable
    // siempre y cuando explique lo que hace
    const { name, description, price, availableQty, status, user_id, productImage } = req.body;
 
    await Products.create({
      name,
      description,
      price,
      availableQty,
      status,
      user_id,
      productImage,
    });
    // de aqui para abajo no se ejecuta si create User tiene un error
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

const getProductsGreater0 = async (req, res, next) => {
  try {


    const products = await Products.findAll({

      attributes: {
        exclude: ['userId', 'productId']
      },
      include: {
        model: Users,
        attributes: [ 'username' ]
      },
      where: { 
        availableQty: {
          [Op.gt]: 0
        },
      }
    }); 
    
    res.json(products)
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await Products.update({ description }, {
        where: { id }
    });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};




module.exports = {
  createProduct,
  getProductsGreater0,
  updateProduct
};

