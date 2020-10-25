const mongoose = require('mongoose');

const { Schema } = mongoose;

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  size: {
    type: String,
    default: "Small", 
    required: true
  },
  iced: {
    type: String,
    default: "No"
  },
  milk: {
    type: String,
    default: "No Milk"
  },
  specialInstructions: {
    type: String
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;
