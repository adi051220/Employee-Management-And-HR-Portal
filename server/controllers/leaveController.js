const Leave = require('../models/Leave');
const Employee = require('../models/Employee');

const getMyLeaves = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        const leaves = await Leave.find({ employee: employee._id });
        res.status(200).json(leaves);
    }
    catch (error) {
        next(error);
    }
};

const applyForLeave = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        const { leaveType, startDate, endDate, reason } = req.body;

        const leave = await Leave.create({
            employee: employee._id,
            leaveType,
            startDate,
            endDate,
            reason
        });

        res.status(201).json(leave);
    }
    catch (error) {
        next(error);
    }
};

const updateLeaveStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const leave = await Leave.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.status(200).json(leave);
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    getMyLeaves,
    applyForLeave,
    updateLeaveStatus
};