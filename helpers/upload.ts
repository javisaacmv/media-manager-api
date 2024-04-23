import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv'
dotenv.config()

// create s3 instance using S3Client 
// (this is how we create s3 instance in v3)
const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.S3_AK as string, // store it in .env file to keep it safe
        secretAccessKey:  process.env.S3_SAK as string
    },
    region: "us-east-1" // this is the region that you select in AWS account
})

const s3Storage = multerS3({
    s3: s3, // s3 instance
    bucket: "jmawz-disruptivetest-mediacontent1", // change it as per your project requirement
    acl: "public-read", // storage access type
    metadata: (req, file, cb) => {
        cb(null, {fieldname: file.fieldname})
    },
    key: (req, file, cb) => {
        const fileName = Date.now() + "_" + file.fieldname + "_" + file.originalname;
        cb(null, fileName);
    }
});

export const upload = multer({
    storage: s3Storage,
   
})