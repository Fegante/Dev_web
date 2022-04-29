import { Router } from 'express';
import vendedorRouter from './vendedor-router';
import eventoRouter from './evento-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/vendedores', vendedorRouter);
baseRouter.use('/eventos', eventoRouter);

// Export default.
export default baseRouter;
