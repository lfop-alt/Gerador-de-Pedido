const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class cobranca extends Model {
    static associate(models) {
      this.belongsTo(models.Pedidos, {
        foreignKey: 'pedidosId',
      });
    }
  }
  cobranca.init({
    cnpjCobranca: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Campo não pode ser vazio',
        },
      },
    },
    corporateNameCobranca: DataTypes.STRING,
    AddressCobranca: DataTypes.STRING,
    ieCobranca: DataTypes.STRING,
    ccmCobranca: DataTypes.STRING,
    nameCobranca: DataTypes.STRING,
    emailCobranca: DataTypes.STRING,
    telFixoCobranca: DataTypes.STRING,
    celularCobranca: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cobranca',
  });
  return cobranca;
};
