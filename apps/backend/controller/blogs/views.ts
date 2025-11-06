import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';

export const updateViews = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }

    // Find the blog
    const blog = await Blogs.findByIdAndUpdate({ _id: id }, { $inc: { 'views.count': 1 } });

    return res.status(200).json({ blogsCount: blog?.views?.count });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getViews = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }
    // Find the blog
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json({ blogsCount: blog?.views?.count });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
