import { Router } from 'express';
import vendedorRouter from './vendedor-router';
import eventoRouter from './evento-router';
import produtoRouter from './produto-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/vendedores', vendedorRouter);
baseRouter.use('/eventos', eventoRouter);
baseRouter.use('/produtos', produtoRouter);

// Export default.
export default baseRouter;
