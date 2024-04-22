import { Request, Response } from "express"
import { UserModel } from "../models/user"
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'
import { generateJWT } from "../helpers/generateJWT"
dotenv.config()


export const login = async (req: Request, res: Response) => {
    console.log(req.body)
    const {email, password} = req.body

    const user = await UserModel.findOne({email})

    if(!user){
        return res.status(400).json({
            msg: 'Invalid credentials'
        })
    }

    const valid = bcryptjs.compareSync(password, user.password)

    if(!valid){
        return res.status(400).json({
            msg: 'Invalid credentials'
        })
    }

    const token = await generateJWT(user.id, user.type)

    return res.json({
        msg: 'login',
        token
    })
} 