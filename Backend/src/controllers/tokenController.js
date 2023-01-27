const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = {
  async createToken(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: 'Credenciais Invalidas' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Usuario não existe' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.passwordHash);

    if (!passwordIsValid) {
      return res.status(401).json({ message: 'E-mail e Senha Incorreto' });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: 86400
    });

    return res.json({ token });
  },
};
