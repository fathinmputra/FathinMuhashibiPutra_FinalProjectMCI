'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_pembeli extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_pembeli.init({
    email: DataTypes.STRING,
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_pembeli',
  });
  return user_pembeli;
};