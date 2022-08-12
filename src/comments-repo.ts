import {model, Schema} from 'mongoose';
import {IComment} from './types';

const commentsSchema = new Schema<IComment>({
    author: String,
    content: String,
    time: String,
    post: String
})

const Comment = model<IComment>('comment', commentsSchema)

const getPostComments = (postId: string) => {
    return Comment.find({post: postId})
}

const addComment = (postId: string, author: string, content: string) => {
    const newComment = new Comment({
        post: postId,
        time: '数分前',
        author,
        content
    })
    return newComment.save()
}


module.exports = {
    getPostComments,
    addComment
}