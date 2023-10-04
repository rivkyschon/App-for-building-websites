const express = require('express');
const router = express.Router();
const {
    postMessage,
    getUnreadMessages,
    updateMessage,
    deleteMessage } = require('../controllers/messagesController')


const {
    postMessageSchema,
} = require('../middleware/validators')

const { reply } = require('../middleware/email')

router.post('/post', postMessageSchema, postMessage)
router.get('/getUnread', getUnreadMessages)
router.delete('/delete', deleteMessage)
router.put('/reply', reply, updateMessage)

module.exports = router;

