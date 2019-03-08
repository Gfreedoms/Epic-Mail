class NotFoundError {
	constructor(message) {
		this.name = 'NotFoundError';
		this.message = message;
	}
}

class BadRequestError {
	constructor(message) {
		this.name = 'BadRequest';
		this.message = message;
	}
}

class AuthenticationError {
	constructor(message) {
		this.name = 'AuthenticationError';
		this.message = message;
	}
}

NotFoundError.prototype = new Error();
BadRequestError.prototype = new Error();
AuthenticationError.prototype = new Error();

export default { NotFoundError, AuthenticationError, BadRequestError };
