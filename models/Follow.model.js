import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import Stock from "./Stock.model.js";
import User from "./User.model.js";

const Follow = sequelize.define(
  "follow",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "user_stock_unique",
      references: {
        model: User,
        key: "id",
      },
    },
    stockId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "user_stock_unique",
      references: {
        model: Stock,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["userId", "stockId"],
        name: "user_stock_unique",
      },
    ],
  }
);

// Relación con el modelo Stock
Follow.belongsTo(Stock, {
  foreignKey: {
    allowNull: false,
    name: "stockId",
    field: "stock_id",
  },
  onDelete: "CASCADE",
});

// Relación con el modelo User
Follow.belongsTo(User, {
  foreignKey: {
    allowNull: false,
    name: "userId",
    field: "user_id",
  },
  onDelete: "CASCADE",
});

export default Follow;
