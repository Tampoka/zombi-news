import {Request, Response} from 'express';

const {getAllPosts, getPostById, getPostsByCategory} = require('./posts-repo')
const {getAllCategories} = require('./categories-repo')
const {getPostComments, addComment} = require('./comments-repo')

//posts
async function getPosts(_req: Request, res: Response) {
    try {
        const posts = await getAllPosts()
        res.send(posts)
    } catch (error) {
        res.send(error)
    }
}

async function getPost(req: Request, res: Response) {
    try {
        const post = await getPostById(req.params.id)
        res.send(post)
    } catch
        (error) {
        res.send(error)
    }
}

//categories
async function getCategories(_req: Request, res: Response) {
    try {
        const categories = await getAllCategories()
        res.send(categories)
    } catch (error) {
        res.send(error)
    }
}

async function getCategoryPosts(req: Request, res: Response) {
    try {
        const categoryValue = req.params.id
        const posts = await getPostsByCategory(categoryValue)
        const categoryPosts = [...posts, ...posts, ...posts]
        res.send(categoryPosts)
    } catch (error) {
        res.send(error)
    }
}

//comments
async function getComments(req: Request, res: Response) {
    try {
        const postId = req.params.id
        const comments = await getPostComments(postId)
        res.send(comments)
    } catch (error) {
        res.send(error)
    }
}

async function createComment(req: Request, res: Response) {
    try {
        const postId = req.params.id
        const {name, comment} = req.body
        await addComment(postId, name, comment)
        const comments = await getPostComments(postId)
        res.send(comments)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getPosts,
    getPost,
    getCategories,
    getCategoryPosts,
    getComments,
    createComment
}