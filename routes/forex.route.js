import express from 'express';
import { getForex} from '../controllers/forex.controller.js';

const router = express.Router();

router.get("/get_forex", getForex);

export default router;