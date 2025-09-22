import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';

export const updateLikes = async (req: Request, res: Response) => {
  try {
    const { id, userName, userEmail, userImage } = req.query;
    if (!id || !userName || !userEmail || !userImage) {
      return res.status(400).json({ message: 'Bad Request - id and user are required' });
    }
    const blog = await Blogs.findOne({ _id: id, 'likes.users.email': userEmail });

    if (!blog || blog?.likes?.users?.length === 0) {
      const updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $push: { 'likes.users': { email: userEmail, name: userName, image: userImage } } },
        { new: true } // or `returnDocument: 'after'` if using native MongoDB
      );
      res.json({ likes: updatedPost?.likes?.users.length || 0, hasLiked: true });
    } else {
      const updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $pull: { 'likes.users': { email: userEmail, name: userName, image: userImage } } },
        { new: true }
      );
      res.json({ likes: updatedPost?.likes?.users.length || 0, hasLiked: false });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const hasLiked = async (req: Request, res: Response) => {
  try {
    const { id, userEmail } = req.query;
    if (!id || !userEmail) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }
    const blog = await Blogs.findOne({ _id: id });
    const hasLiked = await Blogs.findOne({ _id: id, 'likes.users.email': userEmail });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ likes: blog?.likes?.users.length || 0, hasLiked: hasLiked ? true : false });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
