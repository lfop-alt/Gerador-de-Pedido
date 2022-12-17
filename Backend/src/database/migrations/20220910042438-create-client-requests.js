module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clientRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientTelephone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      clientPedidosId: {
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
    await queryInterface.dropTable('clientRequests');
  },
};
