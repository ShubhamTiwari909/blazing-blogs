import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';

export const updateViews = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }

    // Get user IP
    const ip =
      req.headers['x-forwarded-for']?.toString().split(',')[0] ||
      req.socket.remoteAddress ||
      'unknown';
    // Find the blog
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    // Check if this IP has already viewed in the last 24h
    const alreadyViewed = await Blogs.findOne({ _id: id, 'views.ip': ip });
    if (alreadyViewed) {
      return res.status(200).json({ blogsCount: blog.views.length }); // don't increment again
    }

    // Otherwise add a new view
    await Blogs.updateOne({ _id: id }, { $push: { views: { blogId: blog._id, ip } } });
    await blog.save();

    return res.status(200).json({ blogsCount: blog.views.length });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
