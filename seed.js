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
        brand: "Cartier",
        gender: "Unisex"
      },
      {
        name: "Kensington",
        description: "fancy watch",
        price: 399.0,
        brand: "Omega",
        gender: "Male"
      },
      {
        name: "Arrow",
        description: "fancy watch",
        price: 199.0,
        brand: "Rolex",
        gender: "Female"
      },
      {
        name: "Porter",
        description: "fancy watch",
        price: 499.0,
        brand: "Tag Heuer",
        gender: "Female"
      },
      {
        name: "Gatsby",
        description: "fancy watch",
        price: 299.0,
        brand: "Rolex",
        gender: "Unisex"
      },
      {
        name: "Eleanor",
        description: "fancy watch",
        price: 699.0,
        brand: "Cartier",
        gender: "Female"
      },
      {
        name: "Fancy",
        description: "fancy watch",
        price: 699.0,
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
