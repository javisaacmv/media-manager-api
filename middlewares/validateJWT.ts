import { json, NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

type PayloadType =  {id: string, type: string}

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers['x-token']

    if(!token){
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }

    const payload = jwt.verify(token as string, process.env.JWT_SECRET as string) as PayloadType

    if(payload.type as string !== 'ADMIN'){
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }
    next()

}

export const isCreator = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers['x-token']

    if(!token){
        return res.status(401).json({
            msg: 'No token'
        })
    }

    const payload = jwt.verify(token as string, process.env.JWT_SECRET as string)as PayloadType

    console.log(payload)

    if(payload.type !== 'ADMIN' && payload.type !== 'CREATOR'){
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }
    next()

}

export const isReader = (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers['x-token']

    if(!token){
        return res.status(401).json({
            msg: 'Invalid token'
        })
    }

    next()

}