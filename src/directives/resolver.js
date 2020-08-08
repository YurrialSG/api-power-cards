const User = require('../models/user')

const { signin, createUser, deleteUser, oneUser } = require('../mutations/userMutation')

const resolver = {
    Query: {
        allUsers() {
            return User.findAll({ where: { role: 'USER' }})
        },
        allUsersAdmin() {
            return User.findAll({ where: { role: 'ADMIN' }})
        },
    },
    Mutation: {
        //mutations User
        signin,
        createUser,
        deleteUser,
        oneUser,
    }
}

module.exports = { resolver }