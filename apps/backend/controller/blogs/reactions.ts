import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';
import { BlogReactionsParams, User } from './types.js';

export const updateReaction = async (req: Request, res: Response) => {
  try {
    const { id, userName, userEmail, userImage, reaction } = req.query as BlogReactionsParams;
    if (!id || !userEmail || !userName || !userImage || !reaction) {
      return res.status(400).json({ message: 'Bad Request - id, user, and reaction are required' });
    }

    // Check if user already reacted with this emoji
    const existingReaction = await Blogs.findOne({ 
      _id: id, 
      [`reactions.${reaction}.email`]: userEmail 
    });

    if (!existingReaction) {
      // Add user to the reaction
      const updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $push: { [`reactions.${reaction}`]: { email: userEmail, name: userName, image: userImage } } },
        { new: true, upsert: true }
      );
      
      const reactionCounts = {
        heart: updatedPost?.reactions?.heart?.length || 0,
        unicorn: updatedPost?.reactions?.unicorn?.length || 0,
        confetti: updatedPost?.reactions?.confetti?.length || 0,
        fireworks: updatedPost?.reactions?.fireworks?.length || 0,
        party: updatedPost?.reactions?.party?.length || 0,
      };

      const userReactions = {
        heart: updatedPost?.reactions?.heart?.some((u: User) => u.email === userEmail) || false,
        unicorn: updatedPost?.reactions?.unicorn?.some((u: User) => u.email === userEmail) || false,
        confetti: updatedPost?.reactions?.confetti?.some((u: User) => u.email === userEmail) || false,
        fireworks: updatedPost?.reactions?.fireworks?.some((u: User) => u.email === userEmail) || false,
        party: updatedPost?.reactions?.party?.some((u: User) => u.email === userEmail) || false,
      };

      res.json({ 
        reactions: reactionCounts,
        userReactions: userReactions,
      });
    } else {
      // Remove user from the reaction
      const updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $pull: { [`reactions.${reaction}`]: { email: userEmail } } },
        { new: true }
      );
      
      const reactionCounts = {
        heart: updatedPost?.reactions?.heart?.length || 0,
        unicorn: updatedPost?.reactions?.unicorn?.length || 0,
        confetti: updatedPost?.reactions?.confetti?.length || 0,
        fireworks: updatedPost?.reactions?.fireworks?.length || 0,
        party: updatedPost?.reactions?.party?.length || 0,
      };

      const userReactions = {
        heart: updatedPost?.reactions?.heart?.some((u: User) => u.email === userEmail) || false,
        unicorn: updatedPost?.reactions?.unicorn?.some((u: User) => u.email === userEmail) || false,
        confetti: updatedPost?.reactions?.confetti?.some((u: User) => u.email === userEmail) || false,
        fireworks: updatedPost?.reactions?.fireworks?.some((u: User) => u.email === userEmail) || false,
        party: updatedPost?.reactions?.party?.some((u: User) => u.email === userEmail) || false,
      };

      res.json({ 
        reactions: reactionCounts,
        userReactions: userReactions,
      });
    }
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
    const reactionCounts = {
      heart: reactions?.heart?.length || 0,
      unicorn: reactions?.unicorn?.length || 0,
      confetti: reactions?.confetti?.length || 0,
      fireworks: reactions?.fireworks?.length || 0,
      party: reactions?.party?.length || 0,
    };

    // If userEmail is provided, check which reactions the user has made
    let userReactions = {};
    if (userEmail) {
      userReactions = {
        heart: reactions?.heart?.some((user: User) => user.email === userEmail) || false,
        unicorn: reactions?.unicorn?.some((user: User) => user.email === userEmail) || false,
        confetti: reactions?.confetti?.some((user: User) => user.email === userEmail) || false,
        fireworks: reactions?.fireworks?.some((user: User) => user.email === userEmail) || false,
        party: reactions?.party?.some((user: User) => user.email === userEmail) || false,
      };
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
