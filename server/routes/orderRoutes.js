import express from 'express'
import { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder, income } from '../controllers/orderController.js';
import  { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/',verifyToken, createOrder);

router.route('/:id').put(verifyTokenAndAdmin, updateOrder).delete(verifyTokenAndAdmin, deleteOrder)
router.route('/find/:id').get(verifyTokenAndAuthorization ,getOrder)
router.route('/').get(verifyTokenAndAdmin ,getAllOrder)
router.route('/income').get(verifyTokenAndAdmin ,income)


export default router