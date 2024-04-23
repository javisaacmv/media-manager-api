import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
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

 export const MediaModel = mongoose.model('Media', MediaSchema);