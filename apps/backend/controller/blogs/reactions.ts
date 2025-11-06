import { Request, Response } from 'express';
import { Blogs } from '../../schemas/Blogs.js';
import { REACTION_TYPES, type Reaction, type User } from './types.js';

export const updateReaction = async (req: Request, res: Response) => {
  try {
    const { id, userName, userEmail, userImage, reaction } = req.body;
    if (
      !id ||
      !userEmail ||
      !userName ||
      !userImage ||
      !reaction ||
      !REACTION_TYPES.includes(reaction)
    ) {
      return res.status(400).json({ message: 'Bad Request - id, user, and reaction are required' });
    }

    // Check if user already reacted with this emoji
    const existingReaction = await Blogs.findOne({
      _id: id,
      [`reactions.${reaction}`]: { $elemMatch: { email: userEmail } },
    });

    let updatedPost;
    if (!existingReaction) {
      // Add user to the reaction
      updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        {
          $push: {
            [`reactions.${reaction}`]: { email: userEmail, name: userName, image: userImage },
          },
        },
        { new: true }
      );
    } else {
      // Remove user from the reaction
      updatedPost = await Blogs.findOneAndUpdate(
        { _id: id },
        { $pull: { [`reactions.${reaction}`]: { email: userEmail } } },
        { new: true }
      );
    }

    const reactionCounts = {} as Record<Reaction, number>;
    const userReactions = {} as Record<Reaction, boolean>;

    for (const r of REACTION_TYPES) {
      const users = updatedPost?.reactions?.[r] || [];
      reactionCounts[r] = users.length;

      // Create a Set of emails for this specific reaction type for O(1) lookup
      const userEmailSet = new Set(users.map((user: User) => user.email));
      userReactions[r] = userEmailSet.has(userEmail);
    }

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

    const reactionCounts = REACTION_TYPES.reduce(
      (acc, r) => {
        acc[r] = blog?.reactions?.[r]?.length || 0;
        return acc;
      },
      {} as Record<Reaction, number>
    );

    // If userEmail is provided, check which reactions the user has made
    let userReactions = {} as Record<Reaction, boolean>;
    if (userEmail && typeof userEmail === 'string') {
      userReactions = REACTION_TYPES.reduce(
        (acc, r) => {
          const users = blog?.reactions?.[r] || [];
          // Create a Set of emails for this specific reaction type for O(1) lookup
          const userEmailSet = new Set(users.map((user: User) => user.email));
          acc[r] = userEmailSet.has(userEmail);
          return acc;
        },
        {} as Record<Reaction, boolean>
      );
    }

    res.json({
      reactions: reactionCounts,
      userReactions: userEmail ? userReactions : null,
      totalReactions: Object.values(reactionCounts).reduce((sum, count) => sum + count, 0),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
