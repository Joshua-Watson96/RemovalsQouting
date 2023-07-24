
const calculateQuote = (bedrooms) => {
    
    switch (bedrooms) {
      case 'ONE':
        return 1;
      case 'TWO':
        return 1.5;
      case 'THREE':
        return 2;
      case 'FOUR':
        return 2.5;
      default:
        return 0;
    }
  };
  
  const resolvers = {
    Query: {
      getQuote: (_, { bedrooms }) => {
        
        const removalQuote = calculateQuote(bedrooms);
        
        const quoteData = {
          _id: '',
          name:'' ,
          email: '',
          bedrooms,
          removalQuote,
        };
        return quoteData;
      },
    },
  };
  
  module.exports = resolvers;
  