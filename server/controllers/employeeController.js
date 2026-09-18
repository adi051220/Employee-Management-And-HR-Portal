const Employee = require('../models/Employee');

const getEmployees = async (req, res, next) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    }
    catch (error) {
        next(error);
    }
};

const getEmployeeById = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            res.status(404);
            throw new Error('Employee not found');
        }
        res.status(200).json(employee);
    }
    catch (error) {
        next(error);
    }
};

const createEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
    }
    catch (error) {
        next(error);
    }
};

const updateEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(employee);
    }
    catch (error) {
        next(error);
    }
};

const deleteEmployee = async (req, res, next) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ id: req.params.id });
    }
    catch (error) {
        next(error);
    }
};

module.exports = {
    getEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};