import { Schema, model, Document } from 'mongoose';

// Define an interface for the Post document
export interface IPost extends Document {
    title: string;
    content: string;
    sender: string;
    createdAt: Date;
}

// Define the schema for the Post model
const postSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    sender: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create and export the Post model
const Post = model<IPost>('Post', postSchema);
export default Post;
