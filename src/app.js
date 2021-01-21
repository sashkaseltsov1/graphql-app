const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schemas/Query')

const app = express()
const PORT = 4000

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, error => {
    error ? console.log(error) : console.log('server started!')
})

