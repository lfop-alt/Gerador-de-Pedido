module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pedidos', 'emailDeCobranca', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
