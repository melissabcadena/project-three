const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      // products: async (parent, { name }) => {
      //   const params = {};
  
      //   if (name) {
      //     params.name = {
      //       $regex: name
      //     };
      //   }
  
      //   return await Product.find(params).populate('category');
      // },
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.drinks'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      }
    }
  };

  
  
  module.exports = resolvers;