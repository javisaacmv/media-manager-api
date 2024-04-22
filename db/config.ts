import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export const dbConnection = async() => {

    try{

        await mongoose.connect(process.env.MONGO_CNN as string)

        console.log('db connected')

    } catch(err){
        console.log(err)
    }


}