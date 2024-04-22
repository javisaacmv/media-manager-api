import { Router } from "express";
import { login } from "../controller/auth";
import { check } from "express-validator";


const authRouter = Router()

authRouter.post('/login', check('email').isEmail(), login)

export default authRouter