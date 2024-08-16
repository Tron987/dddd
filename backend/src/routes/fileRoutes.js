const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController');
const router = express.Router();

router.post('/upload', uploadFile);
router.get('/', getFiles);

module.exports = router;
