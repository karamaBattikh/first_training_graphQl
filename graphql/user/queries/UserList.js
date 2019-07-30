import { GraphQLList } from 'graphql';
import UserModel from '../../../models/UserModel';
import UserType from '../type/User';

 
export default {
  type: new GraphQLList( UserType),
  resolve() {
    const users = UserModel.find().exec()
    if (!users) {
      throw new Error('Error getting users')
    }
    return users
  }
};