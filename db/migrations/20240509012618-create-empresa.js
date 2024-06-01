'use strict';

// Empresas

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('empresa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface) {
    await queryInterface.dropTable('itens')
  }
};
