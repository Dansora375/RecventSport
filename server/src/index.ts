import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
//import dotenv from 'dotenv'

import { userRouter } from './routes/user';
import { postRouter } from './routes/post';

const MyPassword = "deporTinderPassword"; //process.env.MY_PASSWORD; 

const app = express();
console.log(MyPassword);

app.use(express.json())
app.use(cors());  //basically allows to have a connection to acces your api from your react app

app.use("/user", userRouter)
app.use("/feed", postRouter)
// app.use("/sport", userRouter)

mongoose.connect(
    "mongodb+srv://luisgmmh18v1:"+ MyPassword +"@deportinder.aybr5yv.mongodb.net/DeporTinder"
)


app.listen(3001, ()=> console.log("SERVER STARTED"));