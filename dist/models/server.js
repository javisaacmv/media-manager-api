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
const express_1 = __importDefault(require("express"));
const config_1 = require("../db/config");
const users_1 = __importDefault(require("../routes/users"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("../routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
const media_1 = __importDefault(require("../routes/media"));
dotenv_1.default.config();
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.paths = {
            users: '/api/users',
            auth: '/api/auth',
            media: '/api/media'
        };
        this.dbConnect();
        this.app.use(express_1.default.json());
        this.routes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnection)();
        });
    }
    routes() {
        this.app.use((0, cors_1.default)({ origin: ['*', 'https://media-manager-phi.vercel.app/'], credentials: true }));
        this.app.use(this.paths.users, users_1.default);
        this.app.use(this.paths.auth, auth_1.default);
        this.app.use(this.paths.media, media_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log(`listening on port: ${this.port}`));
    }
    serve() {
        return this.app;
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map