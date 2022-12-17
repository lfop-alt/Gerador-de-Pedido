const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class clientRequests extends Model {
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'clientPedidosId',
      });
    }
  }
  clientRequests.init({
    clientName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    clientEmail: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    clientTelephone: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    clientCelular: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'clientRequests',
  });
  return clientRequests;
};
