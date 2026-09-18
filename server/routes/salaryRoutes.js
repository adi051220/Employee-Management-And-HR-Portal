const express = require('express');
const router = express.Router();
const { getMySalaryRecords, generateSalarySlip } = require('../controllers/salaryController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMySalaryRecords);
router.post('/generate', protect, generateSalarySlip);

module.exports = router;