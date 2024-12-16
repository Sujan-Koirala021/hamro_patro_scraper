import express from 'express';
import { getGoldSilverPrice} from '../controllers/goldSilver.controller.js';

const router = express.Router();

router.get("/get_gold_silver_price", getGoldSilverPrice);

export default router;