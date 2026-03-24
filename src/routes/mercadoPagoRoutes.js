import express from 'express';
import { renderCheckout, createPreference } from '../controllers/mercadoPagoController.js';

const router = express.Router();

router.get('/', renderCheckout);
router.post('/create_preference', createPreference);

export default router;