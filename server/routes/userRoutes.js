import express from 'express';
import { test, CreatePlan } from '../controllers/userController.js';

const router = express.Router();

router.get('/test', test);
router.post('/create-plan', CreatePlan);

export default router;