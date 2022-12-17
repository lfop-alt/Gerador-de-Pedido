module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pedidos', 'sallerName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Pedidos', 'statusClient', {
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
