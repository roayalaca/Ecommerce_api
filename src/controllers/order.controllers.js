const Orders = require("../models/order.model")

const createOrder = async (req, res) => {
  try {
    const { totalPrice, user_id } = req.body;

    const order = await Orders.create({ totalPrice, user_id });
    res.status(201).json(order);


  } catch (error) {
    res.status(400).json(error);
  }
};

const getOrders = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const order = await Orders.findAll({
      where: { user_id }
    });
    res.json(order);
  } catch (error) {
    next(error);
  }
};




module.exports = {
    createOrder,    
    getOrders
}