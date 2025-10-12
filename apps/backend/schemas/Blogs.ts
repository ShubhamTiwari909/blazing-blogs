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
});

export const Blogs = mongoose.model('pages', blogSchema);
