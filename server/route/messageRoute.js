import express from 'express';
import MessageController from '../controllers/message';
import ValidateMessage from '../middleware/validateMessage';
// import helper from '../utils/helper';

const router = express.Router();

router.post(
	'/api/v1/messages',
	ValidateMessage.validateMessageData,
	MessageController.sendMessage,
);

router.get(
	'/api/v1/messages/sent',
	MessageController.getSentMessages,
);

export default router;
