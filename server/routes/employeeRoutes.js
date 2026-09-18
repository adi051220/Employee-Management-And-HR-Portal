const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getEmployees);
router.post('/', protect, createEmployee);

router.get('/:id', protect, getEmployeeById);
router.put('/:id', protect, updateEmployee);
router.delete('/:id', protect, deleteEmployee);

module.exports = router;