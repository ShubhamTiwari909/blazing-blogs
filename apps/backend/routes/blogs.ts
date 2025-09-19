import express, { Router, type Request, type Response, type NextFunction } from 'express';
import { dynamicLimiter } from '../middlewares/rate-limiting.js';
import { updateViews } from '../controller/blogs/views.js';
import { getLikes, updateLikes } from '../controller/blogs/likes.js';

const router: Router = express.Router();

router.post(
  '/update/views',
  dynamicLimiter(1),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateViews(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/update/likes',
  dynamicLimiter(1),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateLikes(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/likes',
  dynamicLimiter(1),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getLikes(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
