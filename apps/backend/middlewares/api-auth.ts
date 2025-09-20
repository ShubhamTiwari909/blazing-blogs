// customAuthMiddleware.ts
import { checkIfUserExists } from '../utils/checkIfUserExist.js';
import { Request, Response, NextFunction } from 'express';
import redis from '../utils/redisClient.js';
import { encrypt } from '@repo/encryption/encrypt-decrypt';

export async function customAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers['authorization'];
    const passkey = authHeader && authHeader.split(' ')[1];
    const email = authHeader && authHeader.split(' ')[2];

    if (!passkey || !email) {
      res.status(401).json({ message: 'Unauthorized: Missing token' });
      return;
    }
    const encryptedPasskey = await encrypt(passkey, process.env.ENCRYPTION_SECRET!);

    // 🔹 1. Try cache first
    let cachedPasskey = await redis.get(email);


    if (!cachedPasskey) {
      // 🔹 2. Fallback to DB if not in cache
      const user = await checkIfUserExists(email);
      cachedPasskey = user?.passkey as string;

      if (cachedPasskey) {
        // Store in Redis for 5 min
        await redis.set(email, cachedPasskey, { EX: 300 });
      }
    }

    // 🔹 3. Validate
    if (!cachedPasskey || cachedPasskey !== encryptedPasskey) {
      res.status(403).json({ message: 'Forbidden: Invalid or corrupted token' });
      return;
    }

    // 🔹 4. Auth success
    next();
  } catch (error) {
    res.status(403).json({ message: `Forbidden: Invalid or corrupted token ${error}` });
  }
}
