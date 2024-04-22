import express, { Application } from 'express'
import dotenv from 'dotenv'
import { dbConnection } from '../db/config'
import userRouter from '../routes/users'
import cors from 'cors'
import authRouter from '../routes/auth'
dotenv.config()

class Server {
    private app: Application
    private port: string
    private paths


    constructor() {
        this.app = express()
        this.port = process.env.PORT || '4000'
        this.paths = {
            users: '/api/users',
            auth: '/api/auth'
        }
        this.dbConnect()

        this.app.use(cors({origin: ['http://localhost:3000', '*'], credentials: true}))

        this.routes()
    }

    async dbConnect() {
        await dbConnection()
    }

    routes(){
        this.app.use(this.paths.users, userRouter)
        this.app.use(this.paths.auth, authRouter)

    }

    listen() {
        this.app.listen(this.port, () => console.log(`listening on port: ${this.port}`))
    }
}

export default Server