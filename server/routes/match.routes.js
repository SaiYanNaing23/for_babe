import express from 'express';
import dotenv from 'dotenv'

import { career,field, specialization, getSkill, updateMenteesChoices,matching } from "../controllers/match.controllers.js"

const router = express.Router()
dotenv.config()

router.get('/field', field)
router.post('/career', career)
router.post('/specialization', specialization)
router.post('/skill', getSkill)
router.post("/update-mentee-choices", updateMenteesChoices)
router.get("/matching", matching)
export default router;