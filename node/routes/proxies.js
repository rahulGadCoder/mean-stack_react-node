const express = require('express');
const router = express.Router();
const proxiesController = require('../controllers/proxies');
const multer = require('multer')({ dest: 'uploads/' });


router.get('/', proxiesController.getAllProxies);
router.post('/', proxiesController.createProxy);
router.delete('/:name', proxiesController.deleteProxy)
router.post('/fileUpload', multer.single('file'), proxiesController.uploadBundle)

module.exports = router;