import { Router } from 'express';
import * as Comment from '../controller/comments.controller.js';

const router = Router();

router.get('/', Comment.getComment);
router.post('/create', Comment.createComment);

export default router;
