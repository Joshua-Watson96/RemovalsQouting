const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum HouseBedrooms {
    ONE
    TWO
    THREE
    FOUR
  }

  type User {
    _id: ID
    name: String
  }

  type Quote {
    _id: ID
    name: String
    email: String
    bedrooms: HouseBedrooms
    removalQuote: Float
  }

  type Query {
    getUser(_id: ID!): User
    getQuote(_id: ID!): Quote
  }
`;

module.exports = typeDefs;