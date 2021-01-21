const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP

const app = express()
const PORT = 4000

app.use('/graphql', graphqlHTTP({}))

app.listen(PORT, error => {
    error ? console.log(error) : console.log('server started!')
})

