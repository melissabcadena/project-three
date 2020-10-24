const db = require('./connection');
const { User, Drink } = require('../models');

db.once('open', async () => {

  await Drink.deleteMany();

  const drinks = await Drink.insertMany([
    {
      name: 'Alphabet Blocks',
      description: '',
      image: 'alphabet-blocks.jpg',
      price: 4.00,
      quantity: 0,
      size: 'Small',
      iced: 'No',
      milk: 'No Milk',
      specialInstructions: ''
    },
    {
        name: 'Alphabet Blocks',
        description: '',
        image: 'alphabet-blocks.jpg',
        price: 4.00,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      }
  ]);

  console.log('drinks seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});