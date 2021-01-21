const {GraphQLObjectType, GraphQLID, GraphQLSchema} = require('graphql')
const UserType = require('./User')
const BookType = require('./Book')
const {books, users} = require('../mock-data/mock-data')

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: UserType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return users.find(b => b.id == args.id)
            }
        },
        book: {
            type: BookType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return books.find(u => u.id == args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query
})
