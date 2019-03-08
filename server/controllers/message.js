import helperUtils from '../utils/helper';
import error from '../utils/error';
import messages from '../model/message';

const { NotFoundError } = error;

class MessageController {
	static sendMessage(req, res) {
		const id = messages.length + 1;
		const messageDetails = {
			id,
			createdOn: req.body.createdOn,
			subject: req.body.subject,
			message: req.body.message,
			status: req.body.status,
			senderId: req.body.senderId,
			recipients: req.body.recipients,
		};
		const Authrecipients = helperUtils.validateRecipients(messageDetails.recipients);
		try {
			if (Authrecipients.length <= 0) {
				throw new NotFoundError('No registered email address was found');
			}
			messages.push(messageDetails);
			return res.status(201).json({
				status: res.statusCode,
				message: 'Message sent',
			});
		} catch (e) {
			return res.status(404).json({
				status: res.statusCode,
				error: `${e.name}: ${e.message}`,
			});
		}
	}

	static getReceivedMessages(req, res) {
		const rm = helperUtils.getAllReceivedMessages();
		return res.status(200).json({
			status: res.statusCode,
			message: 'success',
			data: rm,
		});
	}

	static getUnreadMessages(req, res) {
		const urm = helperUtils.getAllUnReadMessages();
		return res.status(200).json({
			status: res.statusCode,
			message: 'success',
			data: urm,
		});
	}

	static getSentMessages(req, res) {
		const sm = helperUtils.getAllSentMessages();
		return res.status(200).json({
			status: res.statusCode,
			message: 'success',
			data: sm,
		});
	}
}

export default MessageController;
