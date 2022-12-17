const { productPedido } = require('../models');

module.exports = {
  async createProductPedido(date, res) {
    try {
      if (!date) {
        return res.status(400).json({ message: 'Address Incorrect' });
      }
      const { pedidosId } = date;
      const data = date.itensPedido;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      data.map((product) => product.pedidosId = pedidosId);

      await productPedido.bulkCreate(data);
      return true;
    } catch (err) {
      return console.log(err);
    }
  },

  async editProductPedido(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const product = await productPedido.findByPk(id);

      if (!product) {
        return res.status(400).json({ message: 'product not exist' });
      }

      const date = req.body;

      if (!date) {
        return res.status(400).json({ message: 'date Incorrect' });
      }

      await productPedido.update(date, {
        where: {
          id,
        },
      });

      return res.status(200).json({ message: 'edited' });
    } catch (e) {
      return res.status(400).json(e);
    }
  },

  async listOneProductPedido(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const product = await productPedido.findOne({
        where: {
          id,
        },
      });

      if (!product) {
        return res.status(400).json({ message: 'product not found' });
      }

      return res.status(200).json(product);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
