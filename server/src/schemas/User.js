const {GraphQLObjectType,GraphQLID, GraphQLString, GraphQLInt} = require('graphql')
const GraphQLList = require('graphql').GraphQLList
const {books, shops} = require('../mock-data/mock-data')

module.exports = types => new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(types.BookType),
            resolve: ({id}) => {
                return books.filter(b => b.employee === id)
            }
        },
        shops: {
            type: new GraphQLList(types.ShopType),
            resolve: ({id}) => {
                return shops.filter(s => s.owner === id)
            }
        }
    })
})