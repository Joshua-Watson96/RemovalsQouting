const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    currentUser: (_, __, { currentUser }) => {
      return currentUser; 
    },
    
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log('login request:', email, password);
      const user = await User.findOne({ email });
      console.log('User:', user);

      if (!user) {
        console.log('No user found.');
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.log('Incorrect password');
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
}

// const calculateQuote = (bedrooms) => {
    
//     switch (bedrooms) {
//       case 'ONE':
//         return 1;
//       case 'TWO':
//         return 1.5;
//       case 'THREE':
//         return 2;
//       case 'FOUR':
//         return 2.5;
//       default:
//         return 0;
//     }
//   };
  
//   // const resolvers = {
//   //   Query: {
//   //     getQuote: (_, { bedrooms }) => {
        
//   //       const removalQuote = calculateQuote(bedrooms);
        
//   //       const quoteData = {
//   //         _id: '',
//   //         name:'' ,
//   //         email: '',
//   //         bedrooms,
//   //         removalQuote,
//   //       };
//   //       return quoteData;
//   //     },
//   //   },
//   // };
  
  module.exports = resolvers;
  