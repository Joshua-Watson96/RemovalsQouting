const { gql } = require('apollo-server-express');

const typeDefs = gql`
  enum HouseBedrooms {
    ONE
    TWO
    THREE
    FOUR
  }

  type User {
    _id: ID!
    username: String!
    password: String!
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Quote {
    _id: ID
    name: String
    email: String
    bedrooms: HouseBedrooms
    removalQuote: Float
  }

 type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

  type Query {
    currentUser: User
    getUser(_id: ID!): User
    getQuote(_id: ID!): Quote
  }

  `;

module.exports = typeDefs;