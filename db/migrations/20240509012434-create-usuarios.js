'use strict';

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
        allowNull: false,
        type: Sequelize.STRING,
      },
      dataCadastro: {
        type: Sequelize.DATE
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
