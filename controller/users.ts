import { Request, Response } from "express";
import { UserModel } from "../models/user";
import bcryptjs from 'bcryptjs'


export const createUser = async (req: Request, res: Response) => {
    const body = req.body

    const exists = await UserModel.findOne({email: body.email})

    if(exists){
        return res.status(400).json({
            msg: 'Email already in use'
        })
    }

    const user = new UserModel(body)

    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(body.password, salt)

    await user.save()

    return res.json({
        msg: 'createUser',
        user
    })

}

export const getUsers = async (req: Request, res: Response) => {
    const users = await UserModel.find()

    return res.json({
        msg: 'getUsers',
        users
    })
}