import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoutes.js';
import cors from 'cors';

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB🥳🥳');
}).catch((err) => {
  console.log(err.message);
  console.log(process.env.MONGO);
});

const app = express();
app.use(express.json())
app.use(cors());

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀🚀");
})

app.use('/api/user', userRouter);