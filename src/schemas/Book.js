const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} = require('graphql')
const {users} = require('../mock-data/mock-data')

module.exports = types => new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        count: { type: GraphQLInt },
        employee: {
            type: types.UserType,
            resolve: ({id}) => {
                return users.find(u => u.id === id)
            }
        }
    })
})
