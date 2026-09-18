const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

const getAttendance = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        if (!employee) return res.status(404).json({ message: "Employee profile not found" });

        const attendanceRecords = await Attendance.find({ employee: employee._id });
        res.status(200).json(attendanceRecords);
    } catch (error) {
        next(error);
    }
};

const checkIn = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        if (!employee) return res.status(404).json({ message: "Employee profile not found. Please create one first." });
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const record = await Attendance.create({
            employee: employee._id,
            date: today,
            status: 'Present',
            checkInTime: new Date().toLocaleTimeString()
        });

        res.status(201).json(record);
    } catch (error) {
        next(error);
    }
};

const checkOut = async (req, res, next) => {
    try {
        const employee = await Employee.findOne({ user: req.user.id });
        if (!employee) return res.status(404).json({ message: "Employee profile not found" });
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const record = await Attendance.findOneAndUpdate(
            { employee: employee._id, date: today },
            { checkOutTime: new Date().toLocaleTimeString() },
            { new: true }
        );

        res.status(200).json(record);
    } catch (error) {
        next(error);
    }
};

module.exports = { getAttendance, checkIn, checkOut };