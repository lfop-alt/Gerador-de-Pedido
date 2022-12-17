module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productPedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Productname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      productCode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      commercialDescription: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amountOfProduct: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unitPurchasePrice: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      totalPurchaseAmount: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      monthlyUnitValue: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      totalMonthlyAmount: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('productPedidos');
  },
};
