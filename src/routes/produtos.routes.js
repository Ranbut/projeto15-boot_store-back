import { Router } from 'express';
import { getProdutos } from '../controllers/getProdutos.Controller.js';

const router = Router();

router.get('/produtos', getProdutos);

export default router;