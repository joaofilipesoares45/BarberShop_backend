'use strict';

// Itens

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('itens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAgenda: {
        type: Sequelize.INTEGER
      },
      idServico: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.INTEGER
      },
      idEmpresa: {
        type: Sequelize.INTEGER
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('itens')
  }
};
