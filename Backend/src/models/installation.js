const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Installation extends Model {
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
      });
    }
  }
  Installation.init({
    address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationBairro: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationCity: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationState: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationCep: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    instalationCnpj: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'fields cannot be empty',
        },
      },
    },
    installationName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    installationEmail: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    installationTelFixo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
    installationCel: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Installation',
  });
  return Installation;
};
