const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const resolvers = {
  Query: {
    currentUser: (_, __, { currentUser }) => {
      return currentUser; 
    },
  },

  Mutation: {
    signup: async (_, { username, password }) => {
      const existingUser = await User.findOneAndDelete({ username });
      if (existingUser) {
        throw new Error('Username already exists.');
      }
      
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();

      const token = jwt.sign({ userId: user.id}, process.env.JWT_SECRET);

      return { token, user };
    },
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('Invalid username or password.');
      }

      const token = jwt.sign({userId: user.id }, process.env.JWT_SECRET);

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
  