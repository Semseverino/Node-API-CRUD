import mongoose from "mongoose";
import Joi from "joi";
import {  v4 as uuidv4  } from 'uuid';

const Schema = mongoose.Schema;

//create user schema and model
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    Password: {
        type: String,
        required: [true, 'The password is required']
    },
    Email: {
        type: String,
        required: [true, 'The email is a required feild']
    },
    Tokens: {
        id: {
            type: String,
            required: true,
            format: uuidv4
        }
    }
});

const users = mongoose.model('User', UserSchema);
export default users;
