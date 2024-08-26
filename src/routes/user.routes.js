import { Router } from "express";
import userControllers from "../controller/user.controllers";

const router = Router();

router.post('/users', userControllers.createUserController);

export default router