const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    documentType: {
        type: String,
        enum: ['Resume', 'ID Proof', 'Contract', 'Other'],
        default: 'Other'
    },
    fileUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Document = mongoose.model('Document', documentSchema);

module.exports = Document;