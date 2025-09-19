import mongoose from 'mongoose';

const UserSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
};

const ReplySchema = {
  reply: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: UserSchema,
};

const CommentSchema = {
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  replies: [ReplySchema],
  user: UserSchema,
};
const blogViewSchema = new mongoose.Schema({
  blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blogs', required: true },
  ip: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 86400 },
  // expires in 24 hours (TTL index)
});

const blogSchema = new mongoose.Schema({
  views: {
    type: [blogViewSchema],
    default: [],
  },
  likes: {
    count: {
      type: Number,
      default: 0,
    },
    users: [UserSchema],
  },
  comments: [CommentSchema],
});

export const Blogs = mongoose.model('pages', blogSchema);
