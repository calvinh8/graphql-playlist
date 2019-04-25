const express = require('express')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const schema = require('./schema/schema')

const app = express()

mongoose.connect('mongodb://accountUser:password@localhost/graphql-playlist?authSource=admin')
mongoose.connect('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening for requests on port 4000')
})
