import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js'
import connectDB from './lib/connectDB.js'
dotenv.config(); 

const app = express();


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;


app.use("/api/auth", authRoutes);

 app.listen(PORT, () => {
        console.log(`Server is running on ${HOST+PORT}`);
    });
    

//bIor7ZfC7qxVJH40