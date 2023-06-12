const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInCart = db.define(
  "ProductInCart",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(13),
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInCart;
