import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-lambda';

// get the GraphQL schema
const schema = fs.readFileSync('./src/schema.graphql', 'utf8')

exports.handler = () => {
  console.log('Hello GraphQL');
}