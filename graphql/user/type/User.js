import { GraphQLList, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';

let UserType  = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      firstName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString)
      },
      birthday: {
        type: GraphQLString
      },
      job: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
    }
  }
});

export default UserType ;