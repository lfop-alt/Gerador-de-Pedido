module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Installations', 'instalationCnpj', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationBairro', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationCel', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationCep', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationCity', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.addColumn('Installations', 'installationEmail', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationNumber', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationState', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('Installations', 'installationTelFixo', {
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
