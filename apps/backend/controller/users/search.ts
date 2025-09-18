import { Request, Response } from 'express';
import { checkIfUserExists } from '../../utils/checkIfUserExist.js';

export const searchUserPasskey = async (req: Request, res: Response) => {
  const { email } = req.query;

  if (!email)
    return res.status(400).json({ message: 'Bad Request - email is required' });
  const userPasskeyExist = await checkIfUserExists(email as string);
  if (userPasskeyExist) {
    return res.status(200).json({ message: 'User passkey already exists', email: userPasskeyExist.email, passkey: userPasskeyExist.passkey });
  } else {
    return res.status(404).json({ message: 'User not found' });
  }
};
