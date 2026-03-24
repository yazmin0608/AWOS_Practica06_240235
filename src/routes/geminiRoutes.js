import express from 'express';
import { renderChat, askGemini } from '../controllers/geminiController.js';

const router = express.Router();

router.get('/', renderChat);
router.post('/ask', askGemini);

export default router;