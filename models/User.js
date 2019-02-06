module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    wishlist: Sequelize.STRING,
    cart: Sequelize.STRING
  });
  return User;
}
