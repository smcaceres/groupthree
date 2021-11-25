const { User } = require('../models');

const userData = [{
        username: 'SMC',
        password: '1234'

    },
    {
        username: 'SLJ',
        password: 'sam'
    },
    {
        username: 'RR',
        password: 'ryan'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;