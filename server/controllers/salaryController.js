const Salary = require('../models/Salary');
const Employee = require('../models/Employee');

const getMySalaryRecords = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        const records = await Salary.find({ employee: employee._id });
        res.status(200).json(records);
    }
    catch (error) {
        next(error);
    }
};

const generateSalarySlip = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        const { month, basicSalary, deductions = 0, bonus = 0 } = req.body;

        const netSalary = basicSalary + bonus - deductions;

        const salaryRecord = await Salary.create({
            employee: employee._id,
            month,
            basicSalary,
            bonus,
            deductions,
            netSalary,
            status: 'Paid',
            paymentDate: new Date()
        });

        res.status(201).json(salaryRecord);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    getMySalaryRecords,
    generateSalarySlip
};