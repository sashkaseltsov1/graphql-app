const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} = require('graphql')
const GraphQLList = require('graphql').GraphQLList
const types = require('./typeBuilder')
const {books, users, shops} = require('../mock-data/mock-data')

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: types.UserType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve: (_, {name, age}) => {
                const id = users[users.length - 1] ? users[users.length - 1].id + 1 : 0;
                const user = {
                    id,
                    name,
                    age
                }
                users.push(user)
                return user
            }
        },
        removeUser: {
            type: types.UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (_, {id}) => {
                let index = 0;
                const user = users.find((u, i) => {
                    if (u.id == id) {
                        index = i
                    }
                    return u.id == id
                })
                if (user) {
                    users.splice(index, 1)
                    return user
                } else {
                    return null
                }
            }
        },
        editUser: {
            type: types.UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve: (_, {id, name, age}) => {
                let index = 0;
                const user = users.find((u, i) => {
                    if (u.id == id) {
                        index = i
                    }
                    return u.id == id
                })
                if (user) {

                    users[index] = {...user[index], name, age }
                    return users[index]
                } else {
                    return null
                }
            }
        }
    }
})