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

router.post(
	'/api/v1/auth/login',
	validateUser.validateUserLoginData,
	validateUser.validateLogin,
	UserController.loginUser,
);


export default router;
