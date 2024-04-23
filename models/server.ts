import express, { Application } from 'express'
import { dbConnection } from '../db/config'
import userRouter from '../routes/users'
import cors from 'cors'
import authRouter from '../routes/auth'
import dotenv from 'dotenv'
import mediaRouter from '../routes/media'
dotenv.config()

const PROD_PATH = '.netlify/function/'

class Server {
    private app: Application
    private port: string
    private paths


    constructor(env?: string) {
        this.app = express()
        this.port = process.env.PORT || '4000'
        this.paths = {
            users: (env ? PROD_PATH : '') + '/api/users',
            auth: (env ? PROD_PATH : '') + '/api/auth',
            media: (env ? PROD_PATH : '') + '/api/media'
        }
        this.dbConnect()

        this.app.use(cors({origin: ['http://localhost:3000', '*'], credentials: true}))

        this.app.use(express.json());

        this.routes()
    }

    async dbConnect() {
        await dbConnection()
    }

    routes(){
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