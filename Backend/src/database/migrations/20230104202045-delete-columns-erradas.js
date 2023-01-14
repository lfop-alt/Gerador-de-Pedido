module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Pedidos', 'instalationCnpj');
    await queryInterface.removeColumn('Pedidos', 'nomeDeCobranca');
    await queryInterface.removeColumn('Pedidos', 'emailDeCobranca');
    await queryInterface.removeColumn('Pedidos', 'celularDeCobranca');
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
