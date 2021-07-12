import { Router } from 'express'
import { getIndex } from './controller';

// Router
const router: Router = Router();

// Index route
router.get('/', getIndex);

// Export the router
export const indexRouter = router;