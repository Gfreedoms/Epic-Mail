import { describe, it } from 'mocha';
import { use, request, assert } from 'chai';
import chaihttp from 'chai-http';
import app from '../app';

use(chaihttp);

describe('GET api/v1/messages', () => {
	it('Retrieve all received messages', (done) => {
		request(app)
			.get('/api/v1/messages')
			.end((err, res) => {
				assert.isArray(res.body.data);
				assert.equal(res.body.message, 'success');
				assert.equal(res.status, 200);
				done(err);
			});
	});
});
