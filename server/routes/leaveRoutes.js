const express = require('express');
const router = express.Router();
const { getMyLeaves, applyForLeave, updateLeaveStatus } = require('../controllers/leaveController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMyLeaves);
router.post('/', protect, applyForLeave);
router.put('/:id', protect, updateLeaveStatus);

module.exports = router;