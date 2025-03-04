import {Router, Request, Response} from 'express';
import { container } from 'tsyringe';
//import LoginAdapter from '../../modules/Login/adapter/LoginAdapter';

const loginRouter = Router();

loginRouter.post('/login', async (req: Request, res: Response) => {
    //const adapter =  container.resolve(LoginAdapter)
    //const response = await adapter.execute(req);
    //res.json(response);
});


export default loginRouter;