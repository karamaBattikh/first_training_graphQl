
import {  GraphQLSchema, GraphQLObjectType } from 'graphql';
import AllQuery from './AllQuery';
import allMutation from './AllMutation';


const gqlSchema = new GraphQLSchema ({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: AllQuery
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: allMutation
  })
});

export default gqlSchema;
