'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ExpenseCategory,{
        foreignKey: 'expense_category_id',
        as: 'expenseCategory'
      })
    }
  }
  Expense.init({
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    paymentType_id: DataTypes.INTEGER,
    expense_category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Expense',
  });
  return Expense;
};