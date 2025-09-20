import { Users } from '../../schemas/Users.js';
import { Request, Response } from 'express';
import { checkIfUserExists } from '../../utils/checkIfUserExist.js';
import { generatePasskey } from '../../utils/passkeyGenerator.js';

export const addUser = async (req: Request, res: Response) => {
  const { name, email, image } = req.body;

  if (!name || !email || !image)
    return res.status(400).json({ message: 'Bad Request - name, email, image are required' });

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
