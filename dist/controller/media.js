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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMediaById = exports.getMediaByTitle = exports.getMediaBySubject = exports.getMedia = exports.createMedia = exports.uploadImg = void 0;
const media_1 = require("../models/media");
const uploadImg = (req, res) => {
    if (req.file) {
        res.json({
            file: req.file.location
        });
    }
};
exports.uploadImg = uploadImg;
const createMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const media = new media_1.MediaModel(body);
    yield media.save();
    return res.json({
        media
    });
});
exports.createMedia = createMedia;
const getMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderBy = req.params.orderby;
    let media;
    switch (orderBy) {
        case 'SUBJECT':
            media = yield media_1.MediaModel.find().sort({ subject: 1 });
            break;
        case 'TYPE':
            media = yield media_1.MediaModel.find().sort({ type: 1 });
            break;
        default:
            media = yield media_1.MediaModel.find().sort({ createdAt: 1 });
    }
    return res.json({
        media
    });
});
exports.getMedia = getMedia;
const getMediaBySubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderBy = req.params.orderby;
    const searchString = req.params.searchString;
    let media;
    switch (orderBy) {
        case 'SUBJECT':
            media = yield media_1.MediaModel.find({
                subject: { $regex: searchString, $options: 'i' }
            }).sort({ subject: 1 });
            break;
        case 'TYPE':
            media = yield media_1.MediaModel.find({
                subject: { $regex: searchString, $options: 'i' }
            }).sort({ type: 1 });
            break;
        default:
            media = yield media_1.MediaModel.find({
                subject: { $regex: searchString, $options: 'i' }
            }).sort({ createdAt: 1 });
    }
    return res.json({
        media
    });
});
exports.getMediaBySubject = getMediaBySubject;
const getMediaByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderBy = req.params.orderby;
    const searchString = req.params.searchString;
    let media;
    switch (orderBy) {
        case 'SUBJECT':
            media = yield media_1.MediaModel.find({
                title: { $regex: searchString, $options: 'i' }
            }).sort({ subject: 1 });
            break;
        case 'TYPE':
            media = yield media_1.MediaModel.find({
                title: { $regex: searchString, $options: 'i' }
            }).sort({ type: 1 });
            break;
        default:
            media = yield media_1.MediaModel.find({
                title: { $regex: searchString, $options: 'i' }
            }).sort({ createdAt: 1 });
    }
    return res.json({
        media
    });
});
exports.getMediaByTitle = getMediaByTitle;
const getMediaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const media = yield media_1.MediaModel.findById(id);
    return res.json({
        media
    });
});
exports.getMediaById = getMediaById;
//# sourceMappingURL=media.js.map