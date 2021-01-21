const users = [
    {
        id: 0,
        name: 'user1',
        age: 5
    },
    {
        id: 1,
        name: 'user2',
        age: 5
    },
    {
        id: 2,
        name: 'user3',
        age: 5
    }
]

const books = [
    {
        id: 0,
        title: 'book1',
        count: 50,
        employee: 0
    },
    {
        id: 1,
        title: 'book2',
        count: 500,
        employee: 2
    },
    {
        id: 2,
        title: 'book3',
        count: 51,
        employee: 1
    },
    {
        id: 3,
        title: 'book3',
        count: 50,
        employee: 1
    },
    {
        id: 4,
        title: 'book4',
        count: 500,
        employee: 2
    },
    {
        id: 5,
        title: 'book5',
        count: 51,
        employee: 1
    }
]

const shops = [
    {
        id: 0,
        name: 'shop1',
        rate: 5,
        owner: 1,
        products: [0,2]
    },
    {
        id: 1,
        name: 'shop2',
        rate: 4,
        owner: 0,
        products: [0,1,2]
    },
    {
        id: 2,
        name: 'shop3',
        rate: 3,
        owner: 0,
        products: [1,2]
    }
]

module.exports = {
    users,
    books,
    shops
}