import { Request, Response } from 'express';
import { checkIfUserExists } from '../../utils/checkIfUserExist.js';
import { decrypt } from '@repo/encryption/encrypt-decrypt';
import { searchUserSchemaType } from '../../types/users.js';
import z from 'zod';

export const searchUserPasskey = async (req: Request, res: Response) => {
  const parsedQuery = searchUserSchemaType.safeParse(req.query);
  if (!parsedQuery.success) {
    return res.status(400).json({
      message: 'Bad Request - invalid parameters',
      errors: z.treeifyError(parsedQuery.error),
    });
  }
  const { email } = parsedQuery.data;

  const decryptedEmail = await decrypt(email as string, process.env.ENCRYPTION_SECRET!);
  const userPasskeyExist = await checkIfUserExists(decryptedEmail);
  if (userPasskeyExist) {
    return res.status(200).json({
      message: 'User passkey already exists',
      email: userPasskeyExist.email,
      passkey: userPasskeyExist.passkey,
    });
  } else {
    return res.status(404).json({ message: 'User not found' });
  }
};
