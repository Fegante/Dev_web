import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import vendedorService from '@services/vendedor-service';
import { ParamMissingError } from '@shared/errors';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;



router.get(p.get, async (_: Request, res: Response) => {
    const users = await vendedorService.getAll();
    return res.status(OK).json({users});
});


router.post(p.add, async (req: Request, res: Response) => {
    const { user } = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await vendedorService.addOne(user);
    return res.status(CREATED).end();
});

router.put(p.update, async (req: Request, res: Response) => {
    const { user } = req.body;
    // Check param
    if (!user) {
        throw new ParamMissingError();
    }
    // Fetch data
    await vendedorService.updateOne(user);
    return res.status(OK).end();
});


router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await vendedorService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;
