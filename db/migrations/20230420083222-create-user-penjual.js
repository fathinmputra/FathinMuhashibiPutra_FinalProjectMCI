'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_penjuals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      user_name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(16)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_penjuals');
  }
};