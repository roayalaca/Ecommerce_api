// importar los modelos
 const Users = require("./users.model");
 const Products = require("./products.model");
 const Cars = require("./cars.model")
 const ProductInCart = require("./ProductInCart.model")
 const Orders = require("./order.model")
 const ProductInOrder = require("./ProductInOrder.model")

const initModels = () => {
  Products.belongsTo(Users, {foreignKey: "user_id"});
  Users.hasMany(Products, { foreignKey: "user_id" });
  Users.belongsTo(Cars, { foreignKey: "user_id" });
  Cars.belongsTo(Users, { foreignKey: "user_id" });
  Users.hasMany(Orders, { foreignKey: "user_id" });
  Orders.belongsTo(Users, { foreignKey: "user_id" });
  ProductInCart.hasMany(Products, { foreignKey: "product_id" });
  ProductInCart.belongsTo(Cars, { foreignKey: "cart_id" });
  Cars.hasMany(ProductInCart, { foreignKey: "product_id" });
  Orders.hasMany(ProductInOrder, { foreignKey: "order_id" });
  ProductInOrder.hasMany(Products, { foreignKey: "product_id" });
  ProductInOrder.belongsTo(Orders, { foreignKey: "order_id" }); 
};

module.exports = initModels;
