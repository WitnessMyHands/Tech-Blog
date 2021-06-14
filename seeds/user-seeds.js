const { User } = require('../models');

const userData = [{
        username: 'Carlos',
        password: 'carlos123'

    },
    {
        username: 'Sarah',
        password: 'sarah123'
    },
    {
        username: 'Jazmine',
        password: 'jazmine123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;