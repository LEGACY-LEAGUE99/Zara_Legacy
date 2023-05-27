
import express from 'express';
import HelpController from '../controllers/HelpController';

const router = express.Router();


router.get('/help/:topic', HelpController.Helps);
router.get('/segg', HelpController.Segg);

export default router;




