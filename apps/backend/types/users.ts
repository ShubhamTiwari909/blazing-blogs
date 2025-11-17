import z from 'zod';

export const addUserSchemaType = z.object({
  name: z.string(),
  email: z.string(),
  image: z.string(),
});

export const searchUserSchemaType = z.object({
  email: z.string(),
});
