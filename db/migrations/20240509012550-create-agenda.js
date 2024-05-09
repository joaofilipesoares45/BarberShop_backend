'use strict';

// Agenda

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('agenda', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      hora: {
        type: Sequelize.TIME
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
    await queryInterface.dropTable('agenda')
  }
};
