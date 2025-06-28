const User = require('../models/User');
const DocumentUpload = require('../models/DocumentUpload');
const asyncHandler = require('express-async-handler');
const Notification = require('../models/Notification');


// @desc Submit or createNotificationDetails for a user
// @route POST /api/notify/:id
// @access Private
const createNotificationDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {type, data, date, time } = req.body;

    if (!type || !data || !date || !time) {
        return res.status(400).json({ message: 'All field (!type || !data || !date || !time) are required' });
    }

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const newNotification = await Notification.create({user: id, type, data, date, time });

    return res.status(201).json({
        notification: newNotification,
        message: `newNotification created for user ${user.name} (ID: ${id})`
    });

});

// @desc Get getNotificationDetails for a specific user
// @route GET /api/notify
// @access Private
const getNotificationDetails = asyncHandler(async (req, res) => {
        
    const {employee, type, page=1} = req.query;
    // const {employee, type, status, page=1} = req.query;
    console.log(req.query);

    const query = {};
    if (employee) query.name = employee;
    if (type) query.type = type;
    // if (employee) query.status = status;

    const limit = 50;
    const skip = (page - 1) * limit; 
    
    const notification = await Notification.find(query).skip(skip).limit(limit).lean();

    if (!notification || notification.length === 0) {
        return res.status(404).json({ message: `No notification found` });
    }

    res.status(200).json({
        notification:notification,
        message: `List of notifiactions`
    });
});

module.exports = {
    getNotificationDetails,
    createNotificationDetails
};
