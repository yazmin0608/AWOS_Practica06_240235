import express from 'express';
import { renderMuro } from '../controllers/padletController.js';

const router = express.Router();

router.get('/', renderMuro);

// 🚨 ¡ESTA ES LA LÍNEA QUE TE FALTA!
export default router;