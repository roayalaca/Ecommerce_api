const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const ProductInOrder = db.define(
  "ProductInOrder",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(13),
    }
  },
  {
    timestamps: false,
  }
);

module.exports = ProductInOrder;
