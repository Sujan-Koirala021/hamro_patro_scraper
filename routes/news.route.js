import express from 'express';
import { getNews} from '../controllers/news.controller.js';

const router = express.Router();

router.get("/get_news", getNews);

export default router;