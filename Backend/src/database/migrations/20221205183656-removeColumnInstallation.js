module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Installations', 'addressNumber');
    await queryInterface.removeColumn('Installations', 'district');
    await queryInterface.removeColumn('Installations', 'city');
    await queryInterface.removeColumn('Installations', 'state');
    await queryInterface.removeColumn('Installations', 'cep');
    await queryInterface.removeColumn('Installations', 'clientName');
    await queryInterface.removeColumn('Installations', 'clientEmail');
    await queryInterface.removeColumn('Installations', 'clientTelephone');
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
