'use strict';

const { DataTypes } = require('sequelize');

// Clientes

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEmpresa: {
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dataNascimento: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Telefone1: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Telefone2: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
    })

  },

  async down (queryInterface) {
    await queryInterface.dropTable('clientes')
  }
};
