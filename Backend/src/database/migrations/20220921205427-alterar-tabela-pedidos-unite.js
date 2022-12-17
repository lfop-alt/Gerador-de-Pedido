module.exports = {
  async up(queryInterface) {
    await queryInterface.removeColumn('Pedidos', 'cnpj');
  },

  async down() {
    //
  },
};
