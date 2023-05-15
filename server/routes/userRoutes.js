import express from 'express'
import { deleteUser, getAllUser, getUser, login, signup, updateUser, getUserStats } from '../controllers/userController.js';
import  { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.route('/:id').put(verifyTokenAndAuthorization, updateUser).delete(verifyTokenAndAuthorization, deleteUser);
router.route('/find/:id').get(verifyTokenAndAdmin, getUser)
router.route('/').get(verifyTokenAndAdmin, getAllUser)
router.route('/stats').get(verifyTokenAndAdmin, getUserStats)

export default router