const { clientRequests } = require('../models');

module.exports = {
  async createClientRequest(date, res) {
    try {
      if (!date) {
        return res.status(400).json({ message: 'Client Incorrect' });
      }
      const { clientPedidosId } = date;
      const {
        installationName,
        installationEmail,
        installationTelFixo,
        installationCel,
      } = date.contacts[0];

      await clientRequests.create({
        clientPedidosId,
        clientName: installationName,
        clientEmail: installationEmail,
        clientTelephone: installationTelFixo,
        clientCelular: installationCel,
      });

      return true;
    } catch (err) {
      return console.log(err);
    }
  },

  async editClientRequest(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const client = await clientRequests.findByPk(id);

      if (!client) {
        return res.status(400).json({ message: 'client not found' });
      }

      const date = req.body;

      if (!date) {
        return res.status(400).json({ message: 'date Incorrect' });
      }

      await clientRequests.update(date, {
        where: {
          id,
        },
      });

      return req.status(200).json({ message: 'client Editado' });
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  },

  async listOneClientRequest(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const client = await clientRequests.findOne({
        where: {
          id,
        },
      });

      return res.status(200).json(client);
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
