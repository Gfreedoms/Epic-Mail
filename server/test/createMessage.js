/* eslint-disable linebreak-style */
import { describe, it } from 'mocha';
import { use, request, assert } from 'chai';
import chaihttp from 'chai-http';
import app from '../app';

use(chaihttp);

describe('Post api/v1/messages', () => {
	it('Post message', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'Manu PSg Party',
				message: 'test',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.message, 'Message sent');
				assert.equal(res.status, 201);
				done(err);
			});
	});

	it('Return BadRequestError if createdOn  is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '',
				subject: 'Meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "createdOn" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if subject  is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: '',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "subject" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if message  is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'meeting',
				message: '',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "message" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if status is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: '',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "status" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if senderId  is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'Meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: '',
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "senderId" must be a number');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if recipients is empty', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'Meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: '',
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "recipients" is not allowed to be empty');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if createdOn is not specified', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				subject: 'Meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "createdOn" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if subject is not provided', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "subject" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if message is not provided', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'Meeting',
				status: 'sent',
				senderId: 1,
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "message" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});

	it('Return BadRequestError if senderId is not provided', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				recipients: ['acidriian@app.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "senderId" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});
	it('Return  BadRequestError if recipients is not provided', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'BadRequest: "recipients" is required');
				assert.equal(res.status, 400);
				done(err);
			});
	});
	it('Return NotFoundError if no registered email is provided', (done) => {
		request(app)
			.post('/api/v1/messages')
			.send({
				createdOn: '03/09/2019',
				subject: 'Meeting',
				message: 'This is to inform you that there will be a staff meeting today at 2pm prompt',
				status: 'sent',
				senderId: 1,
				recipients: ['lily@email.com'],
			})
			.end((err, res) => {
				assert.equal(res.body.error, 'NotFoundError: No registered email address was found');
				assert.equal(res.status, 404);
				done(err);
			});
	});
});
