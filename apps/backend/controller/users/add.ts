import { Users } from '../../schemas/Users.js';
import { Request, Response } from 'express';
import { checkIfUserExists } from '../../utils/checkIfUserExist.js';
import { generatePasskey } from '../../utils/passkeyGenerator.js';
import { addUserSchemaType } from '../../types/users.js';
import z from 'zod';

export const addUser = async (req: Request, res: Response) => {
  const parsedBody = addUserSchemaType.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({ message: 'Bad Request - invalid parameters', errors: z.treeifyError(parsedBody.error) });
  }
  const { name, email, image } = parsedBody.data;

  const userExist = await checkIfUserExists(email);

  if (userExist) {
    return res
      .status(200)
      .json({ message: 'User already exists', email, passkey: userExist.passkey });
  }

  try {
    const passkey = generatePasskey();
    const newUser = new Users({ name, email, image, passkey });
    const result = await newUser.save();
    res.status(201).json(`User saved - ${result}`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
