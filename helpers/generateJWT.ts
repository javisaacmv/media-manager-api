import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateJWT = (id: string, type: string) => {

    return new Promise(( resolve, reject) => {

        const payload = {id, type}
        
        jwt.sign(payload, process.env.JWT_SECRET as string, {
            expiresIn: '365d'
        }, (err, token) => {
            if(err){
                console.log(err)
                reject(err)
            }else {
                resolve(token)
            }
        })

    })
}