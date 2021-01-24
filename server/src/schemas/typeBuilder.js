const UserTypeInject = require('./User')
const BookTypeInject = require('./Book')
const ShopTypeInject = require('./Shop')

const types = {}
types.UserType = UserTypeInject(types)
types.BookType = BookTypeInject(types)
types.ShopType = ShopTypeInject(types)

module.exports = types

