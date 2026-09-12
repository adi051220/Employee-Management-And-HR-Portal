const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: Date,
        required: true,
        default: Date.now
    },
    contactNumber: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    baseSalary: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;