import fs from 'fs';
import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './graphql/resolvers';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

// get the GraphQL schema
const typeDefs = fs.readFileSync('./src/graphql/schemas/schema.graphql', 'utf8')

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(ApolloServerPluginLandingPageGraphQLPlayground)
}

const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  csrfPrevention: true,
  plugins 
});

// launch the server when the Lambda is called
exports.handler = server.createHandler();