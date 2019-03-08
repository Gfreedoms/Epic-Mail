const message = [
	{
		id: 1,
		createdOn: '03/01/2019',
		subject: 'Headlines',
		message: 'United confirms new manager',
		status: 'read',
		senderId: 1,
		recipients: ['acidriian@app.com'],
		receiverId: [2],
	},

	{
		id: 2,
		createdOn: '03/23/2019',
		subject: 'Transfer News',
		message: 'follow this link',
		status: 'draft',
		senderId: 1,
	},

	{
		id: 3,
		createdOn: '02/01/2019',
		subject: 'New Fixitures',
		message: 'The news about tonight fixitures are on grail.com',
		status: 'sent',
		senderId: 1,
		recipients: ['acidriian@app.com'],
		receiverId: [2],
	},

	{
		id: 4,
		createdOn: '03/08/2019',
		subject: 'Strike Back',
		message: 'Never felt better',
		status: 'unread',
		senderId: 2,
		recipients: ['acidriian@app.com'],
		receiverId: [1],
	},
	{
		id: 5,
		createdOn: '02/01/2019',
		subject: 'Strike Back',
		message: 'Never felt better',
		status: 'unread',
		senderId: 2,
		recipients: ['acidriian@app.com'],
		receiverId: [1],
	},
];

export default message;
