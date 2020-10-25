const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
  
    const categories = await Category.insertMany([
      { name: 'Hot' },
      { name: 'Iced' }
    ]);
  
    console.log('categories seeded');

  await Drink.deleteMany();

  const drinks = await Drink.insertMany([
    {
      name: 'Latte',
      description: '',
      image: 'latte.jpeg',
      category: categories[0]._id,
      price: 5.00,
      quantity: 1
    },
    {
        name: 'Mocha',
        description: '',
        image: 'mocha.jpeg',
        category: categories[0]._id,
        price: 5.00,
        quantity: 1
      },
      {
        name: 'Americano',
        description: '',
        image: 'americano.jpeg',
        category: categories[0]._id,
        price: 3.00,
        quantity: 1
      },
      {
        name: 'House Coffee',
        description: '',
        image: 'house-coffee.jpeg',
        category: categories[0]._id,
        price: 2.50,
        quantity: 1
      },
      {
        name: 'Cappuccino',
        description: '',
        image: 'mocha.jpeg',
        category: categories[0]._id,
        price: 4.50,
        quantity: 1
      },
      {
        name: 'Iced Latte',
        description: '',
        image: 'latte.jpeg',
        category: categories[1]._id,
        price: 5.00,
        quantity: 1
      },
      {
          name: 'Iced Mocha',
          description: '',
          image: 'mocha.jpeg',
          category: categories[1]._id,
          price: 5.00,
          quantity: 1
        },
        {
          name: 'Iced Americano',
          description: '',
          image: 'americano.jpeg',
          category: categories[1]._id,
          price: 3.00,
          quantity: 1
        },
        {
          name: 'Iced Coffee',
          description: '',
          image: 'house-coffee.jpeg',
          category: categories[1]._id,
          price: 2.50,
          quantity: 1
        },
        {
          name: 'Iced Cappuccino',
          description: '',
          image: 'mocha.jpeg',
          category: categories[1]._id,
          price: 4.50,
          quantity: 1
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