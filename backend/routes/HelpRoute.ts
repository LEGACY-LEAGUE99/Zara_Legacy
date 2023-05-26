
import express from 'express';
import  Helps from '../controllers/HelpController';

const router = express.Router();


router.get('/help', Helps);
router.get('/help/:titel', Helps);

export default router;
