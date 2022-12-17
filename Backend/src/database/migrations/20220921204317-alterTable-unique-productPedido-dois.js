module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('productPedidos', 'productCode', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down() {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
