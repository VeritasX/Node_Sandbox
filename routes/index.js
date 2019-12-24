const express = require('express');
const router = express.Router();
const mainRoutes = require('../controllers/mainController');

router.get('/', mainRoutes.mainPage);

module.exports = router;
