const Document = require('../models/Document');
const Employee = require('../models/Employee');
const Notification = require('../models/Notification'); // Added this import

const uploadDocument = async (req, res) => {
  try {
    const { title, documentType } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    const employee = await Employee.findOne({ user: req.user.id });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee profile not found' });
    }

    const document = await Document.create({
      employee: employee._id,
      title,
      documentType,
      fileUrl: req.file.path,
    });
 
    await Notification.create({
      recipient: req.user.id || req.user._id,
      message: `Document ${req.file.originalname || title} uploaded successfully!`
    });

    res.status(201).json(document);
  }
  catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const getMyDocuments = async (req, res) => {
  try {
    const employee = await Employee.findOne({ user: req.user.id });
    
    if (!employee) {
      return res.status(404).json({ message: 'Employee profile not found' });
    }

    const documents = await Document.find({ employee: employee._id }).sort('-createdAt');
    
    res.status(200).json(documents);
  }
  catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  uploadDocument,
  getMyDocuments
};