import { Router } from 'express';
import vendedorRouter from './vendedor-router';
import eventoRouter from './evento-router';
import produtoRouter from './produto-router';
import authRouter from './auth-router';
import reservaEstoqueRouter from './reservaEstoque-router';

// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/vendedor', vendedorRouter);
baseRouter.use('/evento', eventoRouter);
baseRouter.use('/produto', produtoRouter);
baseRouter.use('/auth', authRouter);
baseRouter.use('/reserva-estoque', reservaEstoqueRouter);

// Export default.
export default baseRouter;
