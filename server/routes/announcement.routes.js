import express from 'express'; 
import dotenv from 'dotenv';
import { createAnc, deleteAnc, showAnc, editAnc } from '../controllers/announcement.controllers.js';

const router = express.Router(); 
dotenv.config()

router.post('/create', createAnc)

router.post('/delete', deleteAnc)

router.post('/show', showAnc)

router.post('/edit', editAnc)

export default router;