import { Request, Response } from 'express';
import { Blogs } from '../../../schemas/Blogs.js';

export const getReactionsFromBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    // const reactions = ['heart', 'unicorn', 'confetti', 'fireworks', 'party'];
    // const reactionsCount = reactions.reduce((acc, reaction) => acc + (blog?.reactions?.[reaction]?.count || 0), 0);
    res.json({ reactionsCount: blog.reactions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
