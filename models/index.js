'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config.json')[env];
var db = {};

// if (config.use_env_variable) {
//   // const { Client } = require('pg');
//   // const client = new Client({
//   //   connectionString: process.env.DATABASE_URL,
//   //   ssl: true,
//   // });
//   // client.connect();
//   var sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
  var sequelize = new Sequelize({
    database: process.env.DATABASE_URL || "horology_db",
    dialect: "postgres",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  });
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
