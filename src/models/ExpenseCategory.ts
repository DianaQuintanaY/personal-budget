import DataTypes from 'sequelize';

const defineExpenseCategoryModel = (sequelize) => {
  sequelize.define('ExpenseCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

export default defineExpenseCategoryModel;
