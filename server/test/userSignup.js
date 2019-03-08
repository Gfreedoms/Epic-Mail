import { describe, it } from 'mocha';
import { use, request, assert } from 'chai';
import chaihttp from 'chai-http';
import app from '../app';

use(chaihttp);


describe('Post api/v1/auth/signup', () => {
	it('Register new users', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.message, 'Epic mail account created successfully');
				assert.equal(res.status, 201);
				assert.isObject(res.body);
				done(err);
			});
	});
	it('Returns BadRequestError if firstname  is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: '',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: firstname cannot be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});
	it('Returns BadRequestError if lastname  is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'John',
				lastname: '',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "lastname" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if email  is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: '',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "email" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if password is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: '',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "password" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if confirmpassword is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: '',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "confirmpassword" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if admin is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: '',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "isAdmin" must be a boolean');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if  firstname is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "firstname" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if  lastname is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "lastname" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if  email is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				password: 'test23',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "email" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});
	it('Returns BadRequestError if  password is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "password" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if confirm password field is empty', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "confirmpassword" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns BadRequestError if  isAdmin is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'test23',
				confirmpassword: 'test23',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "isAdmin" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Returns AuthenticationError if there is password mismatch', (done) => {
		request(app)
			.post('/api/v1/auth/signup')
			.send({
				firstname: 'john',
				lastname: 'Adams',
				email: 'johnadams@freshly.com',
				password: 'tes3',
				confirmpassword: 'test23',
				isAdmin: 'true',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'AuthenticationError: Please confirm your password');
				assert.equal(res.status, 403);
				done(err);
			});
	});
});
