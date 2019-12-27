const express = require('express');
const router = express.Router();
const mainRoutes = require('../controllers/mainController');

router.get('/', mainRoutes.mainPage);
router.post('/', mainRoutes.mainPageSubmit);

module.exports = router;
