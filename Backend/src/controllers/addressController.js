const { Address } = require('../models');

module.exports = {
  async createAddress(date, res) {
    try {
      if (!date) {
        return res.status(400).json({ message: 'Address Incorrect' });
      }

      const {
        pedidosId,
        address,
        installationNumber,
        installationBairro,
        installationCity,
        installationState,
        installationCep,
        installationCnpj,
      } = date;

      await Address.create({
        pedidosId,
        CnpjInstalation: installationCnpj,
        address,
        addressNumber: installationNumber,
        district: installationBairro,
        city: installationCity,
        state: installationState,
        country: 'Brasil',
        cep: installationCep,
      });

      return true;
    } catch (err) {
      return console.log(err);
    }
  },

  async editAddress(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const address = await Address.findByPk(id);

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }

      const date = req.body;

      if (!date) {
        return res.status(400).json({ message: 'Date Incorrect' });
      }

      await Address.update(date, {
        where: {
          id,
        },
      });

      return res.status(200).json({ message: 'modified address' });
    } catch (e) {
      return res.status(400).json(e);
    }
  },

  async listOneAddress(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const address = await Address.findOne({
        where: {
          id,
        },
      });

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }
      return res.status(200).json(address);
    } catch (e) {
      return res.status(400).json(e);
    }
  },

  async deleteAddress(req, res) {
    try {
      const id = req.params;

      if (!id) {
        return res.status(400).json({ message: 'iD Incorrect' });
      }

      const address = await Address.findOne({
        where: {
          id,
        },
      });

      if (!address) {
        return res.status(404).json({ message: 'Address not found' });
      }

      await Address.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ message: 'Address deleted' });
    } catch (e) {
      return res.status(400).json(e);
    }
  },
};
