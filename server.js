import express  from 'express'
import graphqlHTTP from 'express-graphql'
import gqlSchema from './graphql/index'
import cors from 'cors'

const passport = require('passport')

let port = 3001
import DB from './config/ConnectDB'
DB() 

const app = express() 

app.use('*', cors())

app.use(passport.initialize())
app.use(passport.session())


app.use('/graphql', graphqlHTTP({
  schema: gqlSchema,
  graphiql: true
}))


app.listen(port, () => {
  console.log('server started - ', port)
})
