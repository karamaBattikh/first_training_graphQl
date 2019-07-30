import mongoose from 'mongoose'



let userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    birthday: String,
    job: String,
    email: String,
  },
  {
    collection: 'User'
  }
)

let UserModel = mongoose.model('User', userSchema)
export default UserModel