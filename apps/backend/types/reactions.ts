import { z } from 'zod';

export const reactionIdSchemaType = z.object({
  id: z.string(),
});

export const updateReactionSchemaType = z.object({
  id: z.string(),
  userEmail: z.string(),
  userName: z.string(),
  userImage: z.string(),
  reaction: z.enum(['heart', 'unicorn', 'confetti', 'fireworks', 'party']),
});

export const getReactionsSchemaType = z.object({
  id: z.string(),
  userEmail: z.string(),
});