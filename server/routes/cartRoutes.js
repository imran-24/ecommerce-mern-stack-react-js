import express from 'express'
import { createCart, updateCart, deleteCart, getCart, getAllCart } from '../controllers/CartController.js';
import  { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/',verifyToken, createCart);

router.route('/:id').put(verifyTokenAndAuthorization, updateCart).delete(verifyTokenAndAuthorization, deleteCart)
router.route('/find/:id').get(verifyTokenAndAuthorization ,getCart)
router.route('/').get(verifyTokenAndAdmin ,getAllCart)


export default router