const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    static associate(models) {
      this.hasMany(models.productPedido, {
        foreignKey: 'pedidosId',
      });
      this.hasMany(models.Installation, {
        foreignKey: 'pedidosId',
      });
      this.hasMany(models.Cobranca, {
        foreignKey: 'pedidosId',
      });
    }
  }
  Pedidos.init({
    corporateName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    cnpj: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    numberOfCollaborators: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    equipamentNumber: {
      type: DataTypes.INTEGER,
    },
    billingAddress: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingAddressNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingDistrict: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingCity: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingState: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingCountry: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    billingCep: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    financialObservation: DataTypes.STRING,
    noteForInvoice: DataTypes.STRING,
    observationInstallation: DataTypes.STRING,
    ccm: DataTypes.STRING,
    ie: DataTypes.STRING,
    digitallySigned: DataTypes.STRING,
    digitallySignedLink: DataTypes.STRING,
    customerPlan: DataTypes.STRING,
    productPaymentTerms: DataTypes.STRING,
    serasaConditions: DataTypes.STRING,
    fidelity: DataTypes.STRING,
    foundationDate: DataTypes.STRING,
    sallerName: DataTypes.STRING,
    statusClient: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  return Pedidos;
};
