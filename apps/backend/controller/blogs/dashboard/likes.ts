import { Request, Response } from 'express';
import { Blogs } from '../../../schemas/Blogs.js';

export const getLikesFromBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ likesCount: blog?.likes?.users.length || 0 });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
