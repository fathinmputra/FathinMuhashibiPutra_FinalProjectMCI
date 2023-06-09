'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shopping_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  shopping_session.init({
    total: DataTypes.DECIMAL,
    user_pembeli_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'shopping_session',
  });
  return shopping_session;
};