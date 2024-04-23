"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const client_s3_1 = require("@aws-sdk/client-s3");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// create s3 instance using S3Client 
// (this is how we create s3 instance in v3)
const s3 = new client_s3_1.S3Client({
    credentials: {
        accessKeyId: process.env.S3_AK, // store it in .env file to keep it safe
        secretAccessKey: process.env.S3_SAK
    },
    region: "us-east-1" // this is the region that you select in AWS account
});
const s3Storage = (0, multer_s3_1.default)({
    s3: s3, // s3 instance
    bucket: "jmawz-disruptivetest-mediacontent1", // change it as per your project requirement
    acl: "public-read", // storage access type
    metadata: (req, file, cb) => {
        cb(null, { fieldname: file.fieldname });
    },
    key: (req, file, cb) => {
        const fileName = Date.now() + "_" + file.fieldname + "_" + file.originalname;
        cb(null, fileName);
    }
});
exports.upload = (0, multer_1.default)({
    storage: s3Storage,
});
//# sourceMappingURL=upload.js.map