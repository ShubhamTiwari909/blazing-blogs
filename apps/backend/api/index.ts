import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import connectDB from '../mongodb-connection.js';
import compression from 'compression';
import userRoutes from '../routes/users.js';
import blogRoutes from '../routes/blogs.js';
import logger from '../utils/logger.js';
import { dynamicLimiter } from '../middlewares/rate-limiting.js';

const app: Express = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", process.env.WHITELISTING_CSP_API || ''],
        'style-src': ["'self'", "'unsafe-inline'"], // Kept unsafe-inline for styles as it's often needed, but removed from scripts
        'img-src': ["'self'", 'data:', 'https:'], // Added https: for external images
        'connect-src': ["'self'", process.env.WHITELISTING_CSP_API || ''],
        'font-src': ["'self'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'upgrade-insecure-requests': ["'self'"],
      },
    },
  })
);

const corsOptions = {
  origin: process.env.WHITELISTING_CSP_API ? [process.env.WHITELISTING_CSP_API] : false,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(logger);
app.disable('x-powered-by');

// Global Rate Limiter (100 requests per 15 minutes)
app.use(dynamicLimiter(100));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));
app.use(compression());

// Routes
app.get('/', async (_: Request, res: Response) => {
  res.send('Hello world');
});

app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

// Start the server
const PORT = Number(process.env.PORT) || 5481;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to DB. Server not started.', err);
    process.exit(1);
  }
};

startServer();

export default app;
