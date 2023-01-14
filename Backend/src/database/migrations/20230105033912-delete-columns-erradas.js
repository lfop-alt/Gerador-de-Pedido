module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Cobrancas', 'QuantidadeCobranca');
    await queryInterface.removeColumn('Pedidos', 'telephone');
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
