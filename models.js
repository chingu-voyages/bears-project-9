const { Sequelize } = require("sequelize");

let connection;
if (process.env.NODE_ENV === 'production')
  connection = process.env.DATABASE_URL;
else if (process.env.NODE_ENV === 'development')
  connection = {
    database: "horology_db",
    dialect: "postgres",
    operatorsAliases: false,
    define: {
      underscored: true
    }
  };
const sequelize = new Sequelize(connection);

const Watch = sequelize.define("watches", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  image: Sequelize.STRING,
  image30: Sequelize.STRING,
  image400: Sequelize.STRING,
  brand: Sequelize.STRING,
  gender: Sequelize.STRING,
  publicId: Sequelize.STRING
});

const User = sequelize.define("users", {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  wishlist: Sequelize.TEXT,
  cart: Sequelize.TEXT
});

module.exports = {
  sequelize,
  Watch,
  User
};
