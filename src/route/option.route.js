import { Router } from 'express';
import * as Option from '../controller/option.controller.js';

const router = Router();

router.get('/', Option.getOption);
router.post('/create', Option.createOption);

export default router;
