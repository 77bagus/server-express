import express from 'express';
import CheckoutController from '../controller/index.js';

const router = express.Router();

// Rute untuk membuat proses checkout
router.post('/api/checkout', CheckoutController.checkout);

export default router;
