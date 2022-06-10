import fs from 'fs';
import { ApolloServer } from 'apollo-server-lambda';
import resolvers from './graphql/resolvers';

// get the GraphQL schema
const typeDefs = fs.readFileSync('./src/graphql/schemas/schema.graphql', 'utf8')

const server = new ApolloServer({ typeDefs, resolvers })

// launch the server when the Lambda is called
exports.handler = server.createHandler();