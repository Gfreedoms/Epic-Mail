/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import { use, request, assert } from 'chai';
import chaihttp from 'chai-http';
import app from '../app';

use(chaihttp);


describe('Post api/v1/auth/login', () => {
	it('it log\'s in a user', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: 'free@test.com',
				password: 'jan23242',
			})
			.end((err, res) => {
				assert.equal(res.body.message, 'login was successful');
				assert.equal(res.status, 201);
				assert.isObject(res.body);
				assert.equal(res.body.authUser.firstname, 'Freedom');
				assert.equal(res.body.authUser.lastname, 'Gemmar');
				done(err);
			});
	});

	it('Return BadRequestError if email  is empty', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: '',
				password: 'jan23242',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "email" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if password  is empty', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: 'free@test.com',
				password: '',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "password" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if email is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				password: 'jan23242',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "email" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if password is not provided', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: 'free@test.com',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "password" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return AuthenticationError if user email is invalid', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: 'johns24@test.com',
				password: 'jan23242',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'AuthenticationError: invalid email or password');
				assert.equal(res.status, 403);
				done(err);
			});
	});

	it('Return AuthenticationError if user password is invalid', (done) => {
		request(app)
			.post('/api/v1/auth/login')
			.send({
				email: 'free@test.com',
				password: 'ja4',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'AuthenticationError: invalid email or password');
				assert.equal(res.status, 403);
				done(err);
			});
	});
});
