import express from 'express';
import { getRashifal} from '../controllers/rashifal.controller.js';

const router = express.Router();

router.get("/get_rashifal", getRashifal);

export default router;