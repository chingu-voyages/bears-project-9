const { Watch, User } = require('./models');

async function createWatches() {
  await Watch.destroy({ where: {} });
  try {
    const watches = await Watch.bulkCreate([
      {
        name: 'Vesper',
        description: 'fancy watch',
        price: 499.0,
        image: 'https://via.placeholder.com/600/92c952',
        brand: 'Cartier',
        gender: 'Unisex',
      },
      {
        name: 'Kensington',
        description: 'fancy watch',
        price: 399.0,
        image: 'https://via.placeholder.com/600/771796',
        brand: 'Omega',
        gender: 'Male',
      },
      {
        name: 'Arrow',
        description: 'fancy watch',
        price: 199.0,
        image: 'https://via.placeholder.com/600/24f355',
        brand: 'Rolex',
        gender: 'Female',
      },
      {
        name: 'Porter',
        description: 'fancy watch',
        price: 499.0,
        image: 'https://via.placeholder.com/600/d32776',
        brand: 'Tag Heuer',
        gender: 'Female',
      },
      {
        name: 'Gatsby',
        description: 'fancy watch',
        price: 299.0,
        image: 'https://via.placeholder.com/600/e34776',
        brand: 'Rolex',
        gender: 'Unisex',
      },
      {
        name: 'Eleanor',
        description: 'fancy watch',
        price: 699.0,
        image: 'https://via.placeholder.com/600/d89776',
        brand: 'Cartier',
        gender: 'Female',
      }
    ]);
  } catch(e) {
    console.log(e);
  }
}

async function createUsers() {
  await User.destroy({ where: {} });
  try {
    const users = await User.bulkCreate([
        {
          username: 'tara',
          password: 'tara',
        },
        {
          username: 'john',
          password: 'john',
        }
      ]);
  } catch(e) {
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
