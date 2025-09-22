import express, { Router, type Request, type Response, type NextFunction } from 'express';
import { dynamicLimiter } from '../middlewares/rate-limiting.js';
import { getViews, updateViews } from '../controller/blogs/views.js';
import { hasLiked, updateLikes } from '../controller/blogs/likes.js';
import { customAuthMiddleware } from '../middlewares/api-auth.js';
import { getLikesFromBlog } from '../controller/blogs/dashboard/likes.js';

const router: Router = express.Router();

router.post(
  '/update/views',
  dynamicLimiter(120),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateViews(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/views',
  dynamicLimiter(120),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getViews(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/update/likes',
  dynamicLimiter(120),
  customAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateLikes(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/has-liked',
  dynamicLimiter(120),
  customAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await hasLiked(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/likes-count-from-blog',
  dynamicLimiter(120),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getLikesFromBlog(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
