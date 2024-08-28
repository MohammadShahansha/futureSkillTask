import express from 'express';
import { cardController } from './cards.controller';

const router = express.Router();
router.post('/cards', cardController.createCardIntoDB);
router.get('/cards', cardController.getAllCard);
router.get('/cards/:title', cardController.getSingleCard);
router.delete('/cards/:title', cardController.deleteCard);
export const cardRouter = router;
