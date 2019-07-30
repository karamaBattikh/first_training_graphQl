import { GraphQLNonNull, GraphQLString } from 'graphql';
import UserModel from '../../../models/UserModel';
import UserType from '../type/User';

let AddUser = {
  type: UserType,
  args: {
    firstName: { type: new GraphQLNonNull(GraphQLString) } ,
    lastName: { type: new GraphQLNonNull(GraphQLString) } ,
    birthday: { type: GraphQLString },
    job: { type: GraphQLString },
    email: { type: GraphQLString }
  },
  resolve(root, params) {
    // insert only if user not exist
    UserModel.findOne({email: params.email}, (err, user) => {
      if (!err){
        if (!user) {
          const user = new UserModel(params)
          let newUser = user.save(user)
          if (newUser) {
            console.log('new User : ', newUser)
          } else {
            console.log('error when user insert')
          }
          return newUser
        } else {
          console.log ('user exist')
        }
      } else {
        console.log('error :', err)
      }
    })
  }
};

export default AddUser ;