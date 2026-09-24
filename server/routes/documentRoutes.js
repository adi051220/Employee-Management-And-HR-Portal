const express = require('express');
const router = express.Router();
const { uploadDocument, getMyDocuments } = require('../controllers/documentController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/',protect,upload.single('file'),uploadDocument);
router.get('/',protect,getMyDocuments);

module.exports = router;