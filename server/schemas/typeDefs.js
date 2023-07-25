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
    signup(username: String!, password: String!): AuthPayload
    login(username: String!, password: String!): AuthPayload
  }

  type Query {
    currentUser: User
    getUser(_id: ID!): User
    getQuote(_id: ID!): Quote
  }

  `;

module.exports = typeDefs;