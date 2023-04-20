'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  payment_detail.init({
    amount: DataTypes.DECIMAL,
    provider: DataTypes.STRING,
    account_name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    payment_proof: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'payment_detail',
  });
  return payment_detail;
};