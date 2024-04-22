import { Router } from "express";
import { createUser } from "../controller/users";
import { check } from "express-validator";


const userRouter = Router()

userRouter.post('/',check('email').isEmail(), createUser)

export default userRouter