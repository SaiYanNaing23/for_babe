import express from 'express';
import authRouters from './routes/auth.routes.js'
import matchRouters from './routes/match.routes.js'
import blogRouters from './routes/blog.routes.js';
import announcementRouters from './routes/announcement.routes.js';
import profileRouters from './routes/profile.routes.js';
import mentorDetailRouters from './routes/mentorDetail.routes.js';

// Connect to the Mongo DB
import { connectDB } from './configs/db.js'

// Environment variables
import { ENV_VARS } from './configs/Env.js';

// CORS
import cors from 'cors';
import cookieParser from 'cookie-parser';

// middleware
import { protectRoute } from './middleware/protectRoutes.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3001', // replace with your frontend URL
  credentials: true, // allow cookies to be included
}));

app.use("/api/v1/auth", authRouters)
app.use("/api/v1/match",protectRoute, matchRouters)
app.use("/api/v1/blog", blogRouters)
app.use("/api/v1/announcement", announcementRouters)
app.use("/api/v1/profile", profileRouters)
app.use("/api/v1/mentor", mentorDetailRouters)

app.listen(ENV_VARS.PORT, () => {
  console.log(`Example app listening on port ${ENV_VARS.PORT}`)
  connectDB()
})
