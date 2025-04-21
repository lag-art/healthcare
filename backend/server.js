import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


//APP CONFIG


const app=express();
const port=process.env.PORT || 5000;



// Connection string
const uri = "mongodb+srv://lagart:qwerty12345@healthcare.qbck4uu.mongodb.net/healthCaredb?retryWrites=true&w=majority&appName=healthcare"
// Connect to MongoDB
mongoose
  .connect(uri)
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

// CORS config
const corsOptions = {
  origin: ["http://localhost:5173"],
}

//MIDDLEWARES

app.use(express.json())
app.use(cors())
connectCloudinary()


//API ENDPOINTS

app.use('/api/admin',adminRouter) 

app.use('/api/doctor',doctorRouter)

app.use('/api/user',userRouter) 

app.get("/",(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>{
    console.log("server is start",port);
})


