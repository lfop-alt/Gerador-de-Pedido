const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    static associate() {
    }
  }
  Products.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'field cannot be empty',
        },
      },
    },
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
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
