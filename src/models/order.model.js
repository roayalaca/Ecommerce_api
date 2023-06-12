const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Order = db.define(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(13),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Order;
