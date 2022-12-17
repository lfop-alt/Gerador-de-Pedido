module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('productPedidos', 'Productname');
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
