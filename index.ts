import dotenv from 'dotenv'
import Server from './models/server'
import serverless from "serverless-http";
dotenv.config

const server = new Server()

server.listen()