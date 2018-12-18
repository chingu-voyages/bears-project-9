const { Watch } = require('./models');

async function createWatches() {
  await Watch.destroy({ where: {} });
  try {
    const watches = await Watch.bulkCreate([
      {
        name: 'Watch 1',
        description: 'fancy watch',
        price: 100,
        image: 'image.jpg',
      },
      {
        name: 'Watch 2',
        description: 'fancy watch',
        price: 200,
        image: 'image.jpg',
      },
      {
        name: 'Watch 3',
        description: 'fancy watch',
        price: 300,
        image: 'image.jpg',
      },
    ]);
  } catch(e) {
    console.log(e);
  }
}


async function seed() {
  try {
    await createWatches();
  } catch (e) {
    console.log(e);
  } finally {
    process.exit();
  }
}

seed();
