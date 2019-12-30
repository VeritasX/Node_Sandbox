const express = require('express');
const router = express.Router();
const mainRoutes = require('../controllers/mainController');

router.get('/', mainRoutes.mainPage);
router.post('/', mainRoutes.mainPageSubmit);
router.get('/success/:name', mainRoutes.success);
router.post('/success/:name', mainRoutes.success);
router.get('/success', mainRoutes.redirectSuccess);

module.exports = router;
