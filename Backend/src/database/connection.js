const Sequelize = require('sequelize');
const config = require('../config/config.json');

const connection = new Sequelize(config.development);

async function testConnection() {
  try {
    await connection.authenticate();
    console.log('BD has ben conection sucess');
  } catch (e) {
    throw new Error(e);
  }
}

testConnection();

module.exports = connection;
