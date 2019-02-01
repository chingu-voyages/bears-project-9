const { Watch, User } = require("./models");
const bcrypt = require("bcrypt");

// const pw = bcrypt.hashSync("1234", bcrypt.genSaltSync(10), null);

async function createWatches() {
  await Watch.destroy({ where: {} });
  try {
    const watches = await Watch.bulkCreate([
      {
        name: "Vesper",
        description: "fancy watch",
        price: 499.0,
        image: "https://via.placeholder.com/600/92c952",
        image400: "https://via.placeholder.com/400/92c952",
        image30: "https://via.placeholder.com/30/92c952",
        brand: "Cartier",
        gender: "Unisex"
      },
      {
        name: "Kensington",
        description: "fancy watch",
        price: 399.0,
        image: "https://via.placeholder.com/600/771796",
        image400: "https://via.placeholder.com/400/771796",
        image30: "https://via.placeholder.com/30/771796",
        brand: "Omega",
        gender: "Male"
      },
      {
        name: "Arrow",
        description: "fancy watch",
        price: 199.0,
        image: "https://via.placeholder.com/600/24f355",
        image400: "https://via.placeholder.com/400/24f355",
        image30: "https://via.placeholder.com/30/24f355",
        brand: "Rolex",
        gender: "Female"
      },
      {
        name: "Porter",
        description: "fancy watch",
        price: 499.0,
        image: "https://via.placeholder.com/600/d32776",
        image400: "https://via.placeholder.com/400/d32776",
        image30: "https://via.placeholder.com/30/d32776",
        brand: "Tag Heuer",
        gender: "Female"
      },
      {
        name: "Gatsby",
        description: "fancy watch",
        price: 299.0,
        image: "https://via.placeholder.com/600/e34776",
        image400: "https://via.placeholder.com/400/e34776",
        image30: "https://via.placeholder.com/30/e34776",
        brand: "Rolex",
        gender: "Unisex"
      },
      {
        name: "Eleanor",
        description: "fancy watch",
        price: 699.0,
        image: "https://via.placeholder.com/600/d89776",
        image400: "https://via.placeholder.com/400/d89776",
        image30: "https://via.placeholder.com/30/d89776",
        brand: "Cartier",
        gender: "Female"
      }
    ]);
  } catch (e) {
    console.log(e);
  }
}

async function createUsers() {
  await User.destroy({ where: {} });
  try {
    const users = await User.bulkCreate([
      {
        username: "tara",
        password: bcrypt.hashSync("tara", bcrypt.genSaltSync(10), null),
        admin: true
      },
      {
        username: "john",
        password: bcrypt.hashSync("john", bcrypt.genSaltSync(10), null),
        admin: true
      },
      {
        username: "test",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null),
        admin: true
      },
      {
        username: "user",
        password: bcrypt.hashSync("test", bcrypt.genSaltSync(10), null)
      }
    ]);
  } catch (e) {
    console.log(e);
  }
}

async function seed() {
  try {
    await createWatches();
    await createUsers();
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

seed();
