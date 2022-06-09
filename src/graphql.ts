import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-lambda';

// get the GraphQL schema
const schema = fs.readFileSync('./src/schema.graphql', 'utf8')

// resolver functions
const resolvers = { 
  Query: {
    item: () => {},
  },

  Mutation: {
    createItem: () => {},
  }
};

const server = new ApolloServer({ typeDefs: schema, resolvers })

// launch the server when the Lambda is called
exports.handler = server.createHandler();