// Endereço de instalações

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
      });
    }
  }
  Address.init({
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    addressNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    district: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    country: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    cep: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    CnpjInstalation: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
