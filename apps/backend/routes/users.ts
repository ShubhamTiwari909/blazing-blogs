import express, { Router, type Request, type Response, type NextFunction } from 'express';
import { dynamicLimiter } from '../middlewares/rate-limiting.js';
import { addUser } from '../controller/users/add.js';
import { searchUserPasskey } from '../controller/users/search.js';

const router: Router = express.Router();

router.post('/add', dynamicLimiter(1), async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/search',
  dynamicLimiter(80),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await searchUserPasskey(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
