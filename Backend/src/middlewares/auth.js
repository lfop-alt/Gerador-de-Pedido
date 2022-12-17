const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Login necessario' });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = await jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token Expirado' });
  }
}

module.exports = auth;
