import express, { Router, type Request, type Response, type NextFunction } from 'express';
import { dynamicLimiter } from '../middlewares/rate-limiting.js';
import { getViews, updateViews } from '../controller/blogs/views.js';
import { getReactions, updateReaction } from '../controller/blogs/reactions.js';
import { customAuthMiddleware } from '../middlewares/api-auth.js';
import { getReactionsFromBlog } from '../controller/blogs/dashboard/reactions.js';

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
  '/update/reactions',
  dynamicLimiter(120),
  customAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await updateReaction(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/reactions',
  dynamicLimiter(120),
  customAuthMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getReactions(req, res);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/get/reactions-count-from-blog',
  dynamicLimiter(120),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getReactionsFromBlog(req, res);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
