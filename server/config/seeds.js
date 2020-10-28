const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Drinks' },
        { name: 'Cold Drinks' },
        // { name: 'Tasty Treats' },
    ]);

    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Latte',
            description: '',
            image: './images/latte.jpeg',
            category: categories[0]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Mocha',
            description: '',
            image: './images/mocha.jpeg',
            category: categories[0]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Americano',
            description: '',
            image: './images/americano.jpeg',
            category: categories[0]._id,
            price: 3.00,
            quantity: 1
        },
        {
            name: 'House Coffee',
            description: '',
            image: './images/house-coffee.jpeg',
            category: categories[0]._id,
            price: 2.50,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description: '',
            image: './images/cappuccino.jpeg',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Hot Chocolate',
            description: '',
            image: './images/hot-chocolate.jpeg',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Iced Latte',
            description: '',
            image: './images/iced-latte.jpeg',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Iced Mocha',
            description: '',
            image: './images/iced-mocha.jpeg',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Cold-Brewed Coffee',
            description: '',
            image: './images/cold-brewed.jpeg',
            category: categories[1]._id,
            price: 2.50,
            quantity: 1
        },
        {
            name: 'Cappuccino on Ice',
            description: '',
            image: './images/iced-cappuccino.jpeg',
            category: categories[1]._id,
            price: 4.50,
            quantity: 1
        },
    //     {
    //         name: 'Blue Berry Muffin',
    //         description: '',
    //         image: 'bb-muffin.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Biscotti',
    //         description: '',
    //         image: 'biscotti.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Croissant',
    //         description: '',
    //         image: 'croissants.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Chocolate Chunk Cookie',
    //         description: '',
    //         image: 'choc-chunk.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
    //     {
    //         name: 'Chocolate Muffin',
    //         description: '',
    //         image: 'choc-muffin.jpeg',
    //         category: categories[2]._id,
    //         price: 2.00,
    //         quantity: 1
    //     },
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