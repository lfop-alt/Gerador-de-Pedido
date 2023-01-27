module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('productPedidos', 'productCode');
    await queryInterface.addColumn('productPedidos', 'productCode', {
      type: Sequelize.STRING,
      allowNull: false,
    });
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
