import { GraphQLString, GraphQLNonNull, GraphQLID } from 'graphql';
import UserModel from '../../../models/UserModel';
import UserType from '../type/User';


let EditUser= {
  type: UserType,
  args: { 
    idUser: { type: new GraphQLNonNull(GraphQLID)},
    firstName: { type: GraphQLString},
    lastName: {type: GraphQLString},
    birthday: { type: GraphQLString},
    job: { type: GraphQLString },
    email: { type: GraphQLString }
  },
  resolve(root, params) {
    UserModel.findById({_id: params.idUser}, (err, user) => {
      if (!err) {
        if (user) {
          if(params.firstName !== '' )
          {user.firstName = params.firstName}
          if(params.lastName  !== '' )
          {user.lastName = params.lastName}
          if(params.birthday !== '' )
          {user.birthday = params.birthday}
          if(params.job !== '' )
          {user.job = params.job}
          if(params.email !== '' )
          {user.email = params.email}
          const userUpdated = user.save()
                    
          if(userUpdated) { 
            console.log('userUpadated' )
          }else {
            console.log('prob in update user')
          }
        }else {
          console.log('user not found')
        }
      }else {
        console.log('err in updating ')
      }
    })
 
  }
};

export default EditUser;