const { Cobranca } = require('../models');

module.exports = {
  async createCobranca(data, res) {
    try {
      if (!data) {
        return res.status(400).json({ message: 'Date Incorrect' });
      }

      const { pedidosId } = data;
      const date = data.cobranca;

      date.map(cobranca => cobranca.pedidosId = pedidosId)

      await Cobranca.bulkCreate(date);

      return true;
    } catch (err) {
      return console.log(err);
    }
  },
  async listOneCobranca(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const cobranca = await Cobranca.findAll({
        where: {
          pedidosId: id
        },
      });
      return res.status(200).json(cobranca);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
  async editCobranca(req, res) {
    
  }
};
