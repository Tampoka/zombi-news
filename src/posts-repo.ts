import {model, Schema} from 'mongoose';
import {IPost} from './types';

const postsSchema = new Schema<IPost>({
    date: String,
    category: String,
    title: String,
    lead: String,
    content: String,
    source: String,
})

const Post = model<IPost>('post', postsSchema)

const getAllPosts = () => {
    return Post.find()
}

const getPostById = (id: string) => {
    return Post.findOne({_id: id})
}

const getPostsByCategory = (id: string) => {
    return Post.find({category: id})
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostsByCategory
}