"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const dotenv_1 = __importDefault(require("dotenv"));
const generateJWT_1 = require("../helpers/generateJWT");
dotenv_1.default.config();
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { email, password } = req.body;
    const user = yield user_1.UserModel.findOne({ email });
    if (!user) {
        return res.status(400).json({
            msg: 'Invalid credentials'
        });
    }
    const valid = bcryptjs_1.default.compareSync(password, user.password);
    if (!valid) {
        return res.status(400).json({
            msg: 'Invalid credentials'
        });
    }
    const token = yield (0, generateJWT_1.generateJWT)(user.id, user.type);
    return res.json({
        msg: 'login',
        user,
        token
    });
});
exports.login = login;
//# sourceMappingURL=auth.js.map