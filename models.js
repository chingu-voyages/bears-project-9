const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'horology_db',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Watch = sequelize.define('watches', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING
});

module.exports = {
  sequelize,
  Watch
}
