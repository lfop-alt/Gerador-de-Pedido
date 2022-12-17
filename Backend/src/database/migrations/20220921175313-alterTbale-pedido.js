module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Pedidos', 'cnpj', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  async down() {
    //
  },
};
