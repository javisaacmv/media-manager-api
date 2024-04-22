import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true
},
  password: {
    type: String,
    required: true,
},
  email: {
    type: String,
    required: true,
    unique: true
},
  type: {
    type: String,
    required: true,
    enum: ['ADMIN', 'CREATOR', 'READER']
},
  active: {
    type: String,
default: true},
  });

 export const UserModel = mongoose.model('User', UserSchema);