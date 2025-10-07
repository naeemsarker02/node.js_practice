'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExpenseCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Expense,{
        foreignKey:'expense_category_id',
        as: 'expenses'
      })
    }
  }
  ExpenseCategory.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ExpenseCategory',
  });
  return ExpenseCategory;
};