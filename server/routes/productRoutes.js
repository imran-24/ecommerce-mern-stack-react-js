import express from 'express'
import { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct } from '../controllers/productController.js';
import  { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/',verifyTokenAndAdmin, createProduct);

router.route('/:id').put(verifyTokenAndAuthorization, updateProduct).delete(verifyTokenAndAuthorization, deleteProduct)
router.route('/find/:id').get(getProduct)
router.route('/').get(getAllProduct)


export default router