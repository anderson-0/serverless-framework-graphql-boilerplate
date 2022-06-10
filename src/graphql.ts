import fs from 'fs';
import { ApolloServer } from 'apollo-server-lambda';
import item from './graphql/resolvers/queries/item';

// get the GraphQL schema
const typeDefs = fs.readFileSync('./src/graphql/schemas/schema.graphql', 'utf8')

// resolver functions
const resolvers = { 
  Query: {
    item
  },

  Mutation: {
    createItem: () => {},
  }
};

const server = new ApolloServer({ typeDefs, resolvers })

// launch the server when the Lambda is called
exports.handler = server.createHandler();