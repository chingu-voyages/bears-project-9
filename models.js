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
  image: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/600/92c952"
  },
  image30: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/30/92c952"
  },
  image400: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/400/92c952"
  },
  brand: Sequelize.STRING,
  gender: Sequelize.STRING
});

const User = sequelize.define("users", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  wishlist: Sequelize.TEXT,
  cart: Sequelize.TEXT
});

module.exports = {
  sequelize,
  Watch,
  User
};
