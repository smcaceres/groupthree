const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Post, Comment, Vote } = require('../../models');

// GET /api/posts
router.get('/', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'rating',
            'content',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
            'vote_count'
            ]
        ],
        // Order by most voted
        order: [['vote_count', 'DESC']],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /api/:id (single post)
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'rating',
            'content',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
            'vote_count'
            ]
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST /api/posts (create new post)
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        rating: req.body.rating,
        content: req.body.content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/posts/upvote (vote on a post)
router.put('/upvote', (req, res) => {
    // check for session
    if(req.session) {
        // FOLLOW SANDRA'S POST MODEL
        Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
            .then(updatedPostData => res.json(updatedPostData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// PUT /api/posts/:id (edit post rating and content)
router.put('/:id', (req, res) => {
    Post.update(
        {
            rating: req.body.rating,
            content: req.body.content
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/posts/:id (delete a post)
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if(!dbPostData) {
                res.status(404).json({ message: 'No post found with this id!' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;