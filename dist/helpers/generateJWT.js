"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const generateJWT = (id, type) => {
    return new Promise((resolve, reject) => {
        const payload = { id, type };
        jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '365d'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=generateJWT.js.map