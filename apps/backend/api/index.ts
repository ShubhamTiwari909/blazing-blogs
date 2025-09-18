import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import { connectionWrapper } from '../middlewares/db-connection.js';
import compression from 'compression';
import userRoutes from '../routes/users.js';

const app: Express = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': ["'self'"], // Only allow resources from the same origin
        'script-src': ["'self'", process.env.WHITELISTING_CSP_API || ''], // Allow scripts from self and example.com (adjust as needed)
        'style-src': ["'self'", "'unsafe-inline'"], // Allow styles from self.  'unsafe-inline' is generally discouraged but sometimes necessary (use sparingly!)
        'img-src': ["'self'", 'data:'], // Allow images from self and data URLs
        'connect-src': ["'self'", process.env.WHITELISTING_CSP_API || ''], // Allow connections to self and your API
        'font-src': ["'self'"], // Allow fonts from self
        'object-src': ["'none'"], // Disable embedded objects (Flash, etc.)
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"], // Prevents iframing your site
        'upgrade-insecure-requests': ["'self'"],
      },
    },
  })
);

const corsOptions = {
  origin: [process.env.WHITELISTING_CSP_API || ''],
};

// Middleware to parse JSON
app.use(cors(corsOptions)); // for handling CORS
app.use(express.json({ limit: '50mb' })); // for parsing application/json body with a limit of 50mb
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // for parsing application/x-www-form-urlencoded
app.use(compression()); // for compressing the response body

// Routes
app.get('/', async (_: Request, res: Response) => {
  res.send('Hello world');
});

app.use('/users', userRoutes);

// Start the server
const PORT = Number(process.env.PORT) || 5000;

const startServer = async () => {
  try {
    await connectionWrapper(); // ✅ Connect DB first
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
