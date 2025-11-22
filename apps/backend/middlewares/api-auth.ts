// customAuthMiddleware.ts
import { checkIfUserExists } from '../utils/checkIfUserExist.js';
import { Request, Response, NextFunction } from 'express';
import redis from '../utils/redisClient.js';

export async function customAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
      res.status(401).json({ message: 'Unauthorized: Missing token' });
      return;
    }

    // Expected format: "Bearer <passkey> <email>" or just "<passkey> <email>" depending on legacy.
    // Based on previous code: split(' ')[1] was passkey, [2] was email.
    // This implies "Scheme passkey email".
    const parts = authHeader.split(' ');
    if (parts.length < 3) {
      res.status(401).json({ message: 'Unauthorized: Invalid token format' });
      return;
    }

    const passkey = parts[1];
    const email = parts[2];

    if (!passkey || !email) {
      res.status(401).json({ message: 'Unauthorized: Missing credentials' });
      return;
    }

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
    if (!cachedPasskey || cachedPasskey !== passkey) {
      res.status(403).json({ message: 'Forbidden: Invalid or corrupted token' });
      return;
    }

    // 🔹 4. Auth success
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(403).json({ message: 'Forbidden: Invalid or corrupted token' });
  }
}
