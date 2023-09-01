import mongoose from 'mongoose';
import express from 'express';
import { config } from './config/config.js';
import cors from 'cors';

const app = express();

app.use(express.json())

app.use(cors());
app.options('*', cors());

app.listen(config.port, ()=>{
    console.log(`Server started at port : ${config.port}`);
})

const url = 'mongodb://localhost/product'

async function dbConnect(){
    await mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("connected to MongoDb");
    })
    .catch((error)=>{
        console.log(error);
    })
}

dbConnect();