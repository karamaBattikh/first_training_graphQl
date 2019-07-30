import mongoose from 'mongoose'

let dbName = 'mongodb://localhost/trainingDB' 


const DBConnect = async () => {
  try {
    await mongoose.connect(dbName) 
    console.log('ready to use mongoDB') 
        
  } catch (error) {
    console.log(error)
  }
}
 
export default DBConnect 