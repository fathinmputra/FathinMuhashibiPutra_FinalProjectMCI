'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_line1: {
        allowNull: false,
        type: Sequelize.STRING(512)
      },
      address_line2: {
        allowNull: false,
        type: Sequelize.STRING(512)
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      postal_code: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      phone_number: {
        allowNull: false,
        type: Sequelize.STRING(16)
      },
      user_pembeli_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user_pembelis',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('addresses');
  }
};