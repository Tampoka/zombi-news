import  {model, Schema, Types} from 'mongoose';
import {Post} from './types';

const postsSchema = new Schema<Post>({
    id:String,
    date: String,
    category: String,
    title: String,
    lead: String,
    content: String,
    source: String,
})

 const Post =model<Post>('post', postsSchema)

module.exports=Post