const User = require('../models/User');
const Attendance = require('../models/Attendance');
const asyncHandler = require('express-async-handler');

// @desc Get all attendance details for a user (paginated)
// @route GET /api/attend/:id
// @access Private
const getAttendanceAllDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    let { page = 1 } = req.query;

    const user = await User.findById(id).lean();
    if (!user) {
        return res.status(404).json({ message: `User ${id} not found` });
    }

    const limit = 50;
    const skip = (page - 1) * limit;

    const attendance = await Attendance.find({ user: id }).skip(skip).limit(limit).lean();

    if (!attendance || attendance.length === 0) {
        return res.status(404).json({ message: 'No attendance records found' });
    }

    res.status(200).json({
        attendance,
        message: `All attendance records for user ID ${id}`
    });
});

// @desc Mark attendance for a user
// @route POST /attendance/:id
// @access Private
const markAttendance = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, date, time, status } = req.body;

    if (!name || !date || !time || !status) {
        return res.status(400).json({ message: 'All fields (name, date, time, status) are required' });
    }

    const userDetails = await User.findById(id).lean();
    if (!userDetails) {
        return res.status(404).json({ message: 'User not found' });
    }

    const makeAttendance = await Attendance.create({
        user: id,
        name,
        date,
        time,
        status
    });

    res.status(201).json({
        markAttendance: makeAttendance,
        message: `Attendance marked for user ${id} with status ${makeAttendance.status}`
    });
});

// @desc Get attendance status for a user on a specific date
// @route GET /api/attend/attendstatus?id=USER_ID&date=11%20jan%202025
// @access Private
const getAttendanceStatus = asyncHandler(async (req, res) => {
    const { id, date } = req.query;

    if (!id || !date) {
        return res.status(400).json({ message: 'User ID and date are required in query' });
    }

    const user = await User.findById(id).exec();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const record = await Attendance.findOne({ user: id, date }).lean();

    if (!record) {
        return res.status(200).json({
            status: 'Pending',
            message: `Attendance status for user ${id} on ${date} is Pending`
        });
    }

    res.status(200).json({
        status: record.status,
        message: `Attendance status for user ${id} on ${date} is ${record.status}`
    });
});

module.exports = {
    markAttendance,
    getAttendanceStatus,
    getAttendanceAllDetails
};























// const User = require('../models/User')
// const Attendance = require('../models/Attendance')
// const asyncHandler = require('express-async-handler')

// // @desc Get all users
// // @route GET /users
// // @access Private
// const getAttendanceAllDetails = asyncHandler(async (req, res) => {
//     const {id} = req.params
//     let {page = 1} = req.query;  
    
//     const user = await User.findById(id).exec().lean();
//     if(!user){
//         res.status(401).json({ message: `user ${id} not found` })
//     }
    
//     const limit = 50;
//     const skip = (page - 1) * limit;
//     const attendance = await Attendance.findAll({user:id}).skip(skip).limit(limit).lean();

//     if (!attendance || attendance.length === 0) {
//         return res.status(404).json({ message: 'No attendance records found' });
//     }

//     res.status(200).json({ 'attendance': attendance, message :`This is all attendance with having id ${id}` });
// });

// // @desc Update a user
// // @route PATCH /users
// // @access Private
// const markAttendance = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const { user, name, date, time, status } = req.body;
    
//     try{
//         if(!user || !name || !date || !time || !status){
//             return res.status(400).json({ message: '!user || !name || !date || !time || !status all field are required'});
//         }
        
//         const userDetails = await User.findById(id).select('-password').lean();
//         if (!userDetails) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const makeAttendance = await Attendance.create({user: id, name: name, date: date, time: time, status: status});

//         console.log('your Attendance is marked', makeAttendance);
//         res.status(200).json({ markAttendance: makeAttendance, 'message':`your Attendance is marked ${id} having ${makeAttendance.status}`});

//     } catch (err) {
//         console.error('Update failed:', err.message);
//         res.status(500).json({ message: 'An error occurred during attendance' });
//     }
// });


// // @desc Delete a user
// // @route DELETE /users
// // @access Private
// const getAttendanceStatus = asyncHandler(async (req, res) => {
//     const { id } = req.body;
//     const { date } = req.query;

//     // Confirm data
//     if (!id) {
//         return res.status(400).json({ message: 'User ID required' });
//     }

//     const user = await User.findById(id).exec();
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     const status = await Attendance.find({date:date}).exec().lean();

//     if(!status){
//         res.status(200).json({ status: "Pending", message: `Attendance status for ${id} is on Pending`});
//     }

//     res.status(200).json({ status: status.status, message:`Attendance status for ${id} is Marked` });
// });


// module.exports = {
//     markAttendance,
//     getAttendanceStatus,
//     getAttendanceAllDetails
// }