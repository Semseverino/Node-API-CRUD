import  Express  from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const url = `mongodb+srv://severino:DeveloperTobe2@users.7bdt1if.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect()
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
