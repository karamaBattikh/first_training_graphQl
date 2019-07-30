import { GraphQLNonNull, GraphQLString } from 'graphql';
import UserModel from '../../../models/UserModel';
import UserType from '../type/User';

export default {
  type: UserType,
  args: { idUser:{ type:  new GraphQLNonNull(GraphQLString) }},
  resolve: async(root, params) =>{
    const user = await UserModel.findById(params.idUser).exec()
    if (!user) {
      console.log('errr in UserByID')
    }
    return user 
  }
};
