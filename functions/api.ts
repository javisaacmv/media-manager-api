import dotenv from 'dotenv'
import serverless from "serverless-http";
import Server from '../models/server';
dotenv.config

const server = new Server()

export const handler = serverless(server.serve);