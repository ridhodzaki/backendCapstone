const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
try {
  sequelize.authenticate(() => {
    console.log("Konek nih")
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
module.exports = sequelize



