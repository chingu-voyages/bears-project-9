module.exports = (sequelize, DataTypes) => {
  const Watch = sequelize.define("watches", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    image30: DataTypes.STRING,
    image400: DataTypes.STRING,
    brand: DataTypes.STRING,
    gender: DataTypes.STRING,
    publicId: DataTypes.STRING
  });
  return Watch;
}
