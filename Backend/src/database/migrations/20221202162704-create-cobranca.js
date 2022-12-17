module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cobrancas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cnpjCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      corporateNameCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      AddressCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ieCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ccmCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      QuantidadeCobranca: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      nameCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emailCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      telFixoCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celularCobranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pedidosId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pedidos',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('Cobrancas');
  },
};
