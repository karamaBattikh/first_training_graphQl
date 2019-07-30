import { GraphQLString } from 'graphql';
import UserModel from '../../../models/UserModel';

let DeleteUser = {
  type: GraphQLString,
  args: {
    idUser: { type: GraphQLString }
  },
  resolve (root, params) {
    UserModel.findById( params.idUser , (err, user) => {
      if (!err) {
        if (user) {
          console.log(user)
          let userdelete= user.remove()
          if (userdelete) {
            console.log('user est supprimer ')
          } else {
            console.log(' prob in delete User')
          }
        } else {
          console.log(' user does not existe')
        }
      }else {
        console.log('err : ' , err)
      }
    })
  }
}
export default DeleteUser;