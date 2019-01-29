const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "horology_db",
  dialect: "postgres",
  operatorsAliases: false,
  define: {
    underscored: true
  }
});

const Watch = sequelize.define("watches", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING,
  image30: Sequelize.STRING,
  image400: Sequelize.STRING,
  brand: Sequelize.STRING,
  gender: Sequelize.STRING
});

const User = sequelize.define("users", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  wishlist: Sequelize.TEXT,
  cart: Sequelize.TEXT
});

module.exports = {
  sequelize,
  Watch,
  User
};
