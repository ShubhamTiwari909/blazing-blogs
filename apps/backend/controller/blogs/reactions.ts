import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';
import type { BlogReactionsParams, Reaction, User } from './types.js';

const reactions = ['heart', 'unicorn', 'confetti', 'fireworks', 'party'] as const;

export const updateReaction = async (req: Request, res: Response) => {
  try {
    const { id, userName, userEmail, userImage, reaction } = req.query as BlogReactionsParams;
    if (!id || !userEmail || !userName || !userImage || !reaction || !reactions.includes(reaction)) {
      return res.status(400).json({ message: 'Bad Request - id, user, and reaction are required' });
    }

    // Check if user already reacted with this emoji
    const existingReaction = await Blogs.findOne({ 
      _id: id, 
      [`reactions.${reaction}.email`]: userEmail 
    });

    let updatedPost;
    if (!existingReaction) {
      // Add user to the reaction
      updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $push: { [`reactions.${reaction}`]: { email: userEmail, name: userName, image: userImage } } },
        { new: true}
      );
    } else {
      // Remove user from the reaction
      updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $pull: { [`reactions.${reaction}`]: { email: userEmail } } },
        { new: true }
      );
    }

    const reactionTypes: Reaction[] = ['heart', 'unicorn', 'confetti', 'fireworks', 'party'];

    const reactionCounts = reactionTypes.reduce((acc, r) => {
      acc[r] = updatedPost?.reactions?.[r]?.length || 0;
      return acc;
    }, {} as Record<Reaction, number>);

    const userReactions = reactionTypes.reduce((acc, r) => {
      acc[r] = updatedPost?.reactions?.[r]?.some((u: User) => u.email === userEmail) || false;
      return acc;
    }, {} as Record<Reaction, boolean>);

    res.json({ 
      reactions: reactionCounts,
      userReactions: userReactions,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getReactions = async (req: Request, res: Response) => {
  try {
    const { id, userEmail } = req.query;
    if (!id) {
      return res.status(400).json({ message: 'Bad Request - id is required' });
    }
    
    const blog = await Blogs.findOne({ _id: id });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const reactions = blog?.reactions;
    const reactionTypes: Reaction[] = ['heart', 'unicorn', 'confetti', 'fireworks', 'party'];

    const reactionCounts = reactionTypes.reduce((acc, r) => {
      acc[r] = reactions?.[r]?.length || 0;
      return acc;
    }, {} as Record<Reaction, number>);

    // If userEmail is provided, check which reactions the user has made
    let userReactions = {} as Record<Reaction, boolean>;
    if (userEmail) {
      userReactions = reactionTypes.reduce((acc, r) => {
        acc[r] = reactions?.[r]?.some((u: User) => u.email === userEmail) || false;
        return acc;
      }, {} as Record<Reaction, boolean>);
    }

    res.json({ 
      reactions: reactionCounts,
      userReactions: userEmail ? userReactions : null,
      totalReactions: Object.values(reactionCounts).reduce((sum, count) => sum + count, 0)
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
