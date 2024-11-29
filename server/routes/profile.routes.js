import express from 'express';
import dotenv from 'dotenv';
import { showProfile, editProfile } from '../controllers/profile.controllers.js';


const router = express.Router();
dotenv.config()

router.post('/show', showProfile)

router.post('/edit', editProfile)

export default router; 