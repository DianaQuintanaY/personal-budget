import DataTypes from 'sequelize';

const defineExpenseTransactionModel = (sequelize) => {
  sequelize.define('ExpenseTransaction', {
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

export default defineExpenseTransactionModel;
