"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controller/users");
const express_validator_1 = require("express-validator");
const validateJWT_1 = require("../middlewares/validateJWT");
const userRouter = (0, express_1.Router)();
userRouter.post('/create', [validateJWT_1.isAdmin, (0, express_validator_1.check)('email').isEmail(), (0, express_validator_1.check)('type').isIn(['ADMIN', 'CREATOR', 'READER'])], users_1.createUser);
userRouter.post('/register', [(0, express_validator_1.check)('email').isEmail(), (0, express_validator_1.check)('type').isIn(['CREATOR', 'READER'])], users_1.createUser);
exports.default = userRouter;
//# sourceMappingURL=users.js.map