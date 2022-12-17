const bcrypt = require('bcrypt');

const { User } = require('../models');

module.exports = {
  async createUser(req, res) {
    try {
      const data = req.body;

      if (!data) {
        return res.status(400).json({ message: 'Invalido' });
      }

      const PasswordHash = await bcrypt.hash(data.passwordHash, 9);

      data.passwordHash = PasswordHash;

      await User.create(data);

      return res.status(201).json({
        message: 'Create',
      });
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },

  async listUsers(req, res) {
    try {
      const users = await User.findAll();

      if (!users) {
        return res.status(400).json({ message: 'Usuario não encontrado' });
      }

      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  },
};
