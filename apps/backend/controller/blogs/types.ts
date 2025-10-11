export type User = {
  email: string;
  name: string;
  image: string;
};

export type Reaction = 'heart' | 'unicorn' | 'confetti' | 'fireworks' | 'party';

export const REACTION_TYPES = ['heart', 'unicorn', 'confetti', 'fireworks', 'party'] as const;

export type BlogReactionsParams =  {
  id: string;
  userName: string;
  userEmail: string;
  userImage: string;
  reaction: Reaction;
};