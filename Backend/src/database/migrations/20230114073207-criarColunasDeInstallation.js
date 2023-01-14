module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Installations', 'corporateName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'ccmInstallation', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'ieInstallation', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'quantidadeRepInstallation', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
