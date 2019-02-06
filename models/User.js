module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    wishlist: DataTypes.STRING,
    cart: DataTypes.STRING
  });
  return User;
}
