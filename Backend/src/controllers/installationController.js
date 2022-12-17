const { Installation } = require('../models');

module.exports = {
  async createInstallation(date, res) {
    try {
      if (!date) {
        return res.status(400).json({ message: 'Installation Incorrect' });
      }
      const { pedidosId } = date;
      const data = date.installation;

      // eslint-disable-next-line no-return-assign, no-param-reassign
      data.map((install) => install.pedidosId = pedidosId);

      await Installation.bulkCreate(data);

      return true;
    } catch (err) {
      return console.log(err);
    }
  },
};
