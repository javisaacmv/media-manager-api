import express, { Application } from 'express'
import { dbConnection } from '../db/config'
import userRouter from '../routes/users'
import cors from 'cors'
import authRouter from '../routes/auth'
import dotenv from 'dotenv'
import mediaRouter from '../routes/media'
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
            auth: '/api/auth',
            media: '/api/media'
        }
        this.dbConnect()


        this.app.use(express.json());

        this.routes()
    }

    async dbConnect() {
        await dbConnection()
    }

    routes(){
        this.app.use(cors({origin: ['*', 'https://media-manager-phi.vercel.app', 'http://localhost:3000'], credentials: true}))
        this.app.use(this.paths.users, userRouter)
        this.app.use(this.paths.auth, authRouter)
        this.app.use(this.paths.media, mediaRouter)

    }

    listen() {
        this.app.listen(this.port, () => console.log(`listening on port: ${this.port}`))
    }

    serve(){
        return this.app
    }
}

export default Server