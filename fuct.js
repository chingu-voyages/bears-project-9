const { Sequelize } = require("sequelize");

// let connection;
// if (process.env.NODE_ENV === 'production') {
//   console.log("In production!");
//   connection = process.env.DATABASE_URL;
// } else {
//   console.log("Not in production!");
//   connection = {
//     database: "horology_db",
//     dialect: "postgres",
//     operatorsAliases: false,
//     define: {
//       underscored: true
//     }
//   };
// }
// const sequelize = new Sequelize(connection);

const sequelize = new Sequelize({
  database: "dcoum4kfftsbu3",
  username: "pequvxxkeapnyh",
  password: "bc6389e04c51e90ed0642533360ff9bd5c42dc62c5edbd9733f2f3e306d9d0c3",
  host: "ec2-54-163-246-159.compute-1.amazonaws.com",
  dialect: "postgres"
})

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
