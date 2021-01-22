const {GraphQLObjectType, GraphQLID} = require('graphql')
const GraphQLList = require('graphql').GraphQLList
const types = require('./typeBuilder')
const {books, users, shops} = require('../mock-data/mock-data')

module.exports = new GraphQLObjectType({
    name: 'Query',
    fields: {
        user: {
            type: types.UserType,
            args: {id: { type: GraphQLID }},
            resolve: (_, {id}) => {
                return users.find(b => b.id == id)
            }
        },
        book: {
            type: types.BookType,
            args: {id: { type: GraphQLID }},
            resolve: (_, {id}) => {
                return books.find(u => u.id == id)
            }
        },
        shop: {
            type: types.ShopType,
            args: {id: { type: GraphQLID }},
            resolve: (_, {id}) => {
                return shops.find(s => s.id == id)
            }
        },
        users: {
            type: new GraphQLList(types.UserType),
            args: {id: { type: GraphQLID }},
            resolve: () => {
                return users
            }
        },
        books: {
            type: new GraphQLList(types.BookType),
            args: {id: { type: GraphQLID }},
            resolve: () => {
                return books
            }
        },
        shops: {
            type: new GraphQLList(types.ShopType),
            args: {id: { type: GraphQLID }},
            resolve: () => {
                return shops
            }
        }
    }
})
