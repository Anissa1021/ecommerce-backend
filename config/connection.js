require('dotenv').config()
const Sequilize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
	? new Sequilize(process.env.JAWSDB_URL)
	: new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: 'localhost',
		dialect: 'mysql',
		dialectOptions: {
			decimalNumbers: true,
		},
	});

module.exports = sequelize;