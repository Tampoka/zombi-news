const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.get('/posts', controllers.getPosts)
router.get('/posts/:id', controllers.getPost);
router.get('/categories', controllers.getCategories);
router.get('/categories/:id', controllers.getCategoryPosts);
router.get('/comments/:id', controllers.getComments);
router.post('/posts/:id/comments', controllers.createComment);

module.exports = router;