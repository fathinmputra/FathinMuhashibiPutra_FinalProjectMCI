'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  address.init({
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    user_pembeli_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};