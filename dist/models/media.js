"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MediaSchema = new mongoose_1.default.Schema({
    type: {
        type: String,
        required: true,
    },
    displayImg: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    videoUrl: {
        type: String,
    },
    text: {
        type: String,
    },
    createdAt: {
        type: String,
        default: Date.now()
    },
    active: {
        type: String,
        default: true
    },
});
exports.MediaModel = mongoose_1.default.model('Media', MediaSchema);
//# sourceMappingURL=media.js.map