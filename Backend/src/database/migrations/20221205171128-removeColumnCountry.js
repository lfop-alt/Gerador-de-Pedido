module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Installations', 'country');
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
