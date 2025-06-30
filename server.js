import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import teacherRoutes from './routes/teacherRoutes.js'
import studentRoutes from './routes/studentRoutes.js'


dotenv.config();
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;

// add some middlewares
app.use(express.json());
app.use(cors());




// use routes
app.use("/api/auth", authRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/student',studentRoutes)

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
