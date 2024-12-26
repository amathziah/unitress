const express = require('express');
const router = express.Router();
const { getMenu } = require('../controllers/menuController');
const { authenticate } = require('../middleware/authMiddleware');

router.get('/menus',authenticate, getMenu);

module.exports = router;
