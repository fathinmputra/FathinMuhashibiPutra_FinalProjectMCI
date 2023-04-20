'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(64)
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(512)
      },
      discount_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'discounts',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_inventory_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'product_inventories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      product_category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'product_categories',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      user_penjual_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'user_penjuals',
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
      },
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};