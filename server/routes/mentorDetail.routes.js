import express from 'express'; 
import dotenv from 'dotenv';
import { getMentorDetails, updateAgreedMentee, generateMeetingLink, loginAuth, handleGoogleCallback } from '../controllers/mentorDetail.controllers.js';

const router = express.Router();
dotenv.config()

router.post("/details", getMentorDetails)
router.post('/agreed-mentee', updateAgreedMentee)
router.get("/login-auth", loginAuth)
router.post("/google-handle-callback", handleGoogleCallback)
router.post("/generate-meeting-link", generateMeetingLink)

export default router;