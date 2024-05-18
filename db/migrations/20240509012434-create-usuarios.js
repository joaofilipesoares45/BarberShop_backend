'use strict';

const { DataTypes } = require('sequelize');

// Usuarios

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      tipo: {
        type: Sequelize.STRING,
      }
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('usuarios')
  }
};
