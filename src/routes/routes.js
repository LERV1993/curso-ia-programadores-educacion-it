const express = require('express');
const router = express.Router();

const chatResponseController = require("../controllers/chatController");

// ---- Endpoint Chat
router.post('/chat-response', chatResponseController.askText);

module.exports = router;