"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReader = exports.isCreator = exports.isAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const isAdmin = (req, res, next) => {
    const token = req.headers['x-token'];
    if (!token) {
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    if (payload.type !== 'ADMIN') {
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
    next();
};
exports.isAdmin = isAdmin;
const isCreator = (req, res, next) => {
    const token = req.headers['x-token'];
    if (!token) {
        return res.status(401).json({
            msg: 'No token'
        });
    }
    const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    if (payload.type !== 'ADMIN' && payload.type !== 'CREATOR') {
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
    next();
};
exports.isCreator = isCreator;
const isReader = (req, res, next) => {
    const token = req.headers['x-token'];
    if (!token) {
        return res.status(401).json({
            msg: 'Invalid token'
        });
    }
    next();
};
exports.isReader = isReader;
//# sourceMappingURL=validateJWT.js.map