import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';
import MODELS from './models/index';

const sequelize = new Sequelize(process.env.DB_URL,{
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  // dialectOptions: {
  //   ssl: {
  //     required: true,
  //   },
  // },
});

// DEFINE MODELS
for (const key in MODELS) {  //eslint-disable-line
  // Recorre y define los modelos
  MODELS[key](sequelize);
};

const {
  User,
  Income,
  ExpenseCategory,
  ExpenseTransaction,
} = sequelize.models;

Income.belongsTo(User);
User.hasOne(Income);

ExpenseCategory.belongsTo(Income);
Income.hasMany(ExpenseCategory);

ExpenseTransaction.belongsTo(ExpenseCategory);
ExpenseCategory.hasMany(ExpenseTransaction);

export const defineSequelize = {
  ...sequelize.models,
  db: sequelize,
};


