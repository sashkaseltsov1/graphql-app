const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} = require('graphql')

module.exports = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    })
})