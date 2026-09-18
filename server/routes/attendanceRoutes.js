const express = require('express');
const router = express.Router();
const { getAttendance, checkIn, checkOut } = require('../controllers/attendanceController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAttendance);
router.post('/checkin', protect, checkIn);
router.put('/checkout', protect, checkOut);

module.exports = router;