const express = require('express');
const router = express.Router();
const mainRoutes = require('../controllers/mainController');

router.get('/', mainRoutes.mainPage);
router.post('/', mainRoutes.mainPageSubmit);
router.get('/success/:name', mainRoutes.success);
router.post('/success/:name', mainRoutes.success);
router.get('/success', mainRoutes.redirectSuccess);
router.get('/entry/:id', mainRoutes.entryPage);
router.get('/delete/data/:id', mainRoutes.deleteItem);
router.get('/edit/data/:id', mainRoutes.editPage);
router.post('/edit/data/:id', mainRoutes.updateEntry);

module.exports = router;
