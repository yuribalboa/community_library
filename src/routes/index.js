import { Router } from 'express';
import userRouters from './src/routes/user.routes.js';
import bookRouters from './src/routes/book.routes.js';
import loanRouters from './src/routes/loan.routes.js';

const routers = Router();

routers.use("/users", userRouters);
routers.use("/books",bookRouters);
routers.use("/loans",loanRouters);

export {routers}