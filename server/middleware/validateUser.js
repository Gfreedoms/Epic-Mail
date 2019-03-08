import Joi from 'joi';
import HelperUtils from '../utils/helper';
import users from '../model/users';
import error from '../utils/error';

const { AuthenticationError } = error;

class Validate {
	/**
     * @function  validateUserRegData - check for input validation before creating a diary entry
     * @param {object} req - request object
     * @param {object} res - response object
     * @returns {function} next
     *
  */
	static validateUserRegData(req, res, next) {
		const schema = {
			firstname: Joi.string().required(),
			lastname: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().required(),
			confirmpassword: Joi.string().required(),
			isAdmin: Joi.boolean().required(),
		};
		HelperUtils.schemaValidation(req, schema, res, next);
	}

	/**
     * @function  validateUserLoginData - check for input validation before user login
     * @param {object} req - request object
     * @param {object} res - response object
     * @returns {function} next
     *
  */
	static validateUserLoginData(req, res, next) {
		const schema = {
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		};
		HelperUtils.schemaValidation(req, schema, res, next);
	}

	/**
     * @function  validateUserRegPassword - validates password
     * @param {object} req - request object
     * @param {object} res - response object
     * @returns {function} next
     *
  */
	static validateUserRegPassword(req, res, next) {
		try {
			if (req.body.password !== req.body.confirmpassword) {
				throw new AuthenticationError('Please confirm your password');
			}
			return next();
		} catch (e) {
			return res.status(403).json({
				status: res.statusCode,
				error: `${e.name}: ${e.message}`,
			});
		}
	}

	/**
     * @function  validateLogin - validates if user exists before login
     * @param {object} req - request object
     * @param {object} res - response object
     * @returns {function} next
     *
  */

	static validateLogin(req, res, next) {
		const authUser = users.find(user => user.email === req.body.email);
		try {
			if (authUser === undefined || authUser.password !== req.body.password) {
				throw new AuthenticationError('invalid email or password');
			}
			return next();
		} catch (e) {
			return res.status(403).json({
				status: res.statusCode,
				error: `${e.name}: ${e.message}`,
			});
		}
	}
}

export default Validate;
