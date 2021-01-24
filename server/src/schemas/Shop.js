const {GraphQLObjectType,GraphQLID, GraphQLString, GraphQLInt} = require('graphql')
const GraphQLList = require('graphql').GraphQLList
const {books, users} = require('../mock-data/mock-data')

module.exports = types => new GraphQLObjectType({
    name: 'Shop',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        rate: { type: GraphQLInt },
        products: {
            type: new GraphQLList(types.BookType),
            resolve: ({products}) => {
                return books.filter(b => !!products.find(p => p === b.id))
            }
        },
        owner: {
            type: types.UserType,
            resolve: ({id}) => {
                return users.find(u => u.id === id)
            }
        }
    })
})