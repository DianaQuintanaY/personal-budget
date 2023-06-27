import DataTypes from 'sequelize';

const defineIncomeModel = (sequelize) => {
  sequelize.define('Income', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

export default defineIncomeModel;
