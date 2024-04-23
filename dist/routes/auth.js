"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controller/auth");
const express_validator_1 = require("express-validator");
const authRouter = (0, express_1.Router)();
authRouter.post('/login', [(0, express_validator_1.check)('email').isEmail(), (0, express_validator_1.check)('password').not().isEmpty()], auth_1.login);
exports.default = authRouter;
//# sourceMappingURL=auth.js.map