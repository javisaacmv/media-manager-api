import { Router } from "express";
import { createUser } from "../controller/users";
import { check } from "express-validator";
import { isAdmin } from "../middlewares/validateJWT";


const userRouter = Router()

userRouter.post('/create',[isAdmin, check('email').isEmail(), check('type').isIn(['ADMIN', 'CREATOR', 'READER'])], createUser)
userRouter.post('/register',[check('email').isEmail(), check('type').isIn([ 'CREATOR', 'READER'])], createUser)

export default userRouter