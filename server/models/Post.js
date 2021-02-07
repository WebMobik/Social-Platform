import { Schema, model } from 'mongoose'

const Post = new Schema({
  text: {
    type: String,
    required: 'Text is required',
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  postedBy: {
    type: Schema.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  likes: [
    {
      type: Schema.ObjectId,
      ref: 'User',
    },
  ],
  comments: [
    {
      text: String,
      created: {
        type: Date,
        default: Date.now(),
      },
      postedBy: {
        type: Schema.ObjectId,
        ref: 'User',
      },
    },
  ],
})

export default model('Post', Post)
