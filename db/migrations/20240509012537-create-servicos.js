'use strict';

// Serviços

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('servicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      valor: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      duracao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      foto: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      idEmpresa: {
        type: Sequelize.INTEGER
      },
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('servicos')
  }
};
