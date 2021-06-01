const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Customer = require('../app/models/Customer');

const connection = new Sequelize(dbConfig);

const models = [Customer]

models.map( model => model.init(connection) )

module.exports = connection;