import express from 'express'; 
import dotenv from 'dotenv';
import { createBlog, deleteBlog, showBlog } from '../controllers/blog.controllers.js';

const router = express.Router();
dotenv.config()

router.post('/create', createBlog)

router.post('/delete', deleteBlog)

router.post('/show', showBlog)

export default router;