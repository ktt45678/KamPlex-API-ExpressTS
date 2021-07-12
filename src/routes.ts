import { Router } from 'express';
import { cors } from './middlewares/cors';
import { errorHandler, nullRoute } from './middlewares/errors';
import { indexRouter } from './routes/index/router';

const router: Router = Router();

// Set up middlewares
router.use(cors);

// Set up routes
router.use('/', indexRouter);

// Error-handling middleware
router.use(errorHandler);
router.use(nullRoute);

export const routes = router;