import mongoose from 'mongoose';

const UserSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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

const ReactionSchema = {
  heart: [UserSchema],
  unicorn: [UserSchema],
  confetti: [UserSchema],
  fireworks: [UserSchema],
  party: [UserSchema],
}

const blogSchema = new mongoose.Schema({
  views: {
    count: {
      type: Number,
      default: 0,
    },
  },
  reactions: {
    type: ReactionSchema,
    required: false,
  },
  comments: {
    type: [CommentSchema],
  },
});

export const Blogs = mongoose.model('pages', blogSchema);
