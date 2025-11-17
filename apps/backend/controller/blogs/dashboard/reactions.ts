import { Request, Response } from 'express';
import { Blogs } from '../../../schemas/Blogs.js';
import { REACTION_TYPES } from '../types.js';
import { reactionIdSchemaType } from '../../../types/reactions.js';
import z from 'zod';

export const getReactionsFromBlog = async (req: Request, res: Response) => {
  const parsedParams = reactionIdSchemaType.safeParse(req.query);
  if (!parsedParams.success) {
    return res
      .status(400)
      .json({
        message: 'Bad Request - invalid parameters',
        errors: z.treeifyError(parsedParams.error),
      });
  }
  try {
    const blog = await Blogs.findOne({ _id: parsedParams.data.id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const reactionsCount = REACTION_TYPES.reduce(
      (acc, reaction) => acc + (blog?.reactions?.[reaction]?.length || 0),
      0
    );
    res.json({ reactionsCount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
