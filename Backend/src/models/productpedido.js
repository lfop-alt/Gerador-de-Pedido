const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class productPedido extends Model {
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
      });
    }
  }
  productPedido.init({
    productCode: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    commercialDescription: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    amountOfProduct: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    unitPurchasePrice: DataTypes.FLOAT,
    totalPurchaseAmount: DataTypes.FLOAT,
    monthlyUnitValue: DataTypes.FLOAT,
    totalMonthlyAmount: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'productPedido',
  });
  return productPedido;
};
