const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} = require('graphql')
const UserType = require('./User')
const {users} = require('../mock-data/mock-data')

module.exports = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        count: { type: GraphQLInt },
        ownerId: {
            type: UserType,
            resolve: (parent) => {
                return users.find(u => u.id == parent.id)
            }
        }
    })
})
