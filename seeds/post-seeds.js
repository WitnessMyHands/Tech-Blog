const { Post } = require('../models');

const postData = [{
        title: 'Lorem Ipsum',
        content: 'is excellent filler content.',
        user_id: 1

    },
    {
        title: 'Lorem Ipsum 2',
        content: 'is excellent filler content.',
        user_id: 2
    },
    {
        title: 'Lorem Ipsum 3',
        content: 'is excellent filler content.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;