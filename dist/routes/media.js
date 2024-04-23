"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = require("../middlewares/validateJWT");
const upload_1 = require("../helpers/upload");
const media_1 = require("../controller/media");
const mediaRouter = (0, express_1.Router)();
mediaRouter.get('/', media_1.getMedia);
mediaRouter.get('/:orderby', media_1.getMedia);
mediaRouter.get('/subject/:searchString', media_1.getMediaBySubject);
mediaRouter.get('/subject/:searchString/:orderby', media_1.getMediaBySubject);
mediaRouter.get('/title/:searchString', media_1.getMediaByTitle);
mediaRouter.get('/title/:searchString/:orderby', media_1.getMediaByTitle);
mediaRouter.get('/byId/:id', validateJWT_1.isReader, media_1.getMediaById);
mediaRouter.post('/', validateJWT_1.isCreator, media_1.createMedia);
mediaRouter.post('/image', [validateJWT_1.isCreator, upload_1.upload.single('img')], media_1.uploadImg);
exports.default = mediaRouter;
//# sourceMappingURL=media.js.map