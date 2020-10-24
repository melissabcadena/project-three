const db = require('./connection');
const { User, Drink } = require('../models');

db.once('open', async () => {

  await Drink.deleteMany();

  const drinks = await Drink.insertMany([
    {
      name: 'Latte',
      description: '',
      image: 'latte.jpeg',
      price: 5.00,
      quantity: 0,
      size: 'Small',
      iced: 'No',
      milk: 'No Milk',
      specialInstructions: ''
    },
    {
        name: 'Mocha',
        description: '',
        image: 'mocha.jpeg',
        price: 5.00,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'Americano',
        description: '',
        image: 'americano.jpeg',
        price: 3.50,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'House Coffee',
        description: '',
        image: 'house-coffee.jpeg',
        price: 3.00,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'Cappuccino',
        description: '',
        image: 'mocha.jpeg',
        price: 4.50,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'Espresso',
        description: '',
        image: 'espresso.jpeg',
        price: 2.00,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'Hot Chocolate',
        description: '',
        image: 'hot-chocolate.jpeg',
        price: 3.00,
        quantity: 0,
        size: 'Small',
        iced: 'No',
        milk: 'No Milk',
        specialInstructions: ''
      },
      {
        name: 'Mongo Mocha',
        description: '',
        image: 'mongo-mocha.jpeg',
        price: 6.00,
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