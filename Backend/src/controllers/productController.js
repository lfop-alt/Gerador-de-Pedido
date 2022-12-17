const { Products } = require('../models');

module.exports = {
  async createProduct(req, res) {
    try {
      const {
        name,
        productCode,
        commercialDescription,
      } = req.body;
      if (!name && !productCode && !commercialDescription) {
        return res.status(400).json({ message: 'Se encontra vazio' });
      }

      await Products.create({
        name,
        productCode,
        commercialDescription,
      });

      return res.status(201).json({ message: 'created' });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  },

  async editProduct(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD incorrect' });
      }

      const date = req.body;

      console.log(date);

      if (!date) {
        return res.status(400).json({ message: 'Vazio' });
      }

      const product = await Products.findByPk(id);

      if (!product) {
        return res.status(400).json({ message: 'product not found' });
      }

      await Products.update(date, {
        where: {
          id,
        },
      });

      return res.status(200).json({ message: 'Product edit' });
    } catch (e) {
      return res.status(400).json(e);
    }
  },

  async listProduct(req, res) {
    try {
      const products = await Products.findAll();

      if (!products) {
        return res.status(400).json({ message: 'ERRO: Nenhum produto encontrado' });
      }

      return res.status(200).json(products);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

  async listOneProduct(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'id incorrect' });
      }

      const product = await Products.findOne({
        where: { id },
      });

      if (!product) {
        return res.status(400).json({ message: 'product does not exist' });
      }
      return res.status(200).json(product);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

  async deleteProduct(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'id incorrect' });
      }

      await Products.destroy({
        where: { id },
      });

      return res.status(200).json({ message: 'Product ' });
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

};
