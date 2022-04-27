import { Router } from 'express';
import userRouter from './user-router';
import eventoRouter from './evento-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('eventos', eventoRouter);

// Export default.
export default baseRouter;
