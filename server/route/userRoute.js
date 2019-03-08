import express from 'express';
import UserController from '../controllers/users';
import validateUser from '../middleware/validateUser';

const router = express.Router();

router.post(
	'/api/v1/auth/signup',
	validateUser.validateUserRegData,
	validateUser.validateUserRegPassword,
	UserController.registerUser,
);

export default router;
