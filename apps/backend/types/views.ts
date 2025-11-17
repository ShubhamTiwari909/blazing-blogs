import z from 'zod';

export const viewIdSchemaType = z.object({
  id: z.string(),
});
