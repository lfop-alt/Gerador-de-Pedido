module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pedidos', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down() {
    //
  },
};
