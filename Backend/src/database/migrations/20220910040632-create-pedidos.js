module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      corporateName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      numberOfCollaborators: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      equipamentNumber: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      billingAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingAddressNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingDistrict: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingCity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingState: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingCountry: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      billingCep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      financialObservation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      noteForInvoice: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      observationInstallation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Pedidos');
  },
};
