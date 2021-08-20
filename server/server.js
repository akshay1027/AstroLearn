import express from 'express';
import expressValidator from 'express-validator';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { body, param } = expressValidator;

// MongoDB config for backend API
const mongoDB_connectionOptions ={
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGO_URI, mongoDB_connectionOptions, (error) => {
    if(error) {
        return console.error('error: ', error);
    }
    console.log("mongoDB working succesfully");
});

// Express application, RESTful APIs
const app = express();
app.use(cors());

// Server config listen to PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`server started at PORT ${PORT}`);
})