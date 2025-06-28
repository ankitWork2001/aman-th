const User = require('../models/User');
const Leave = require('../models/Leave');
const asyncHandler = require('express-async-handler');

// @desc Get all leave records with filters
// @route GET /api/leaves
// @access Private
const getLeaveAllDetails = asyncHandler(async (req, res) => {
    let { employee, type, startDate, endDate, status, page = 1 } = req.query;

    const query = {};
    if (employee) query.name = employee;
    if (type) query.leaveType = type;
    if (startDate) query.startDate = startDate;
    if (startDate) query.endDate = endDate;
    if (status) query.status = status;

    const limit = 50;
    const skip = (page - 1) * limit;

    const leaves = await Leave.find(query).skip(skip).limit(limit).lean();

    if (!leaves || leaves.length === 0) {
        return res.status(404).json({ message: 'No leave records found' });
    }

    res.status(200).json({leaves,  message: `Filtered leave records fetched ${leaves.length}`});
});

// @desc Create a leave request
// @route POST /api/leaves/:id
// @access Private
const createLeaveDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { leaveType, startDate, endDate, reason } = req.body;

    if (!leaveType || !startDate || !endDate || !reason) {
        return res.status(400).json({ message: 'All fields (leaveType, startDate, endDate, reason) are required' });
    }

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const createLeave = await Leave.create({user: id, name: user.name, leaveType, startDate, endDate, reason, status: "Pending"});

    res.status(201).json({ leaves: createLeave,  message: `New leave created for user ${user.name} (ID: ${id})`});
});

// @desc Get leave details for a user
// @route GET /api/leaves/:id
// @access Private
const getUserLeaveDetails = asyncHandler(async (req, res) => {
    const mon = new Date().getMonth();
    const { id } = req.params;
    const { month = mon, page = 1 } = req.query;

    const query = {};
    if (id) query.user = id;

    const limit = 50;
    const skip = (page - 1) * limit;

    const leaves = await Leave.find(query).skip(skip).limit(limit).lean();

    const filterLeaves = await fsPromises(leaves.filter((leave)=>{
        if(leave.startDate.includes(month) || leave.endDate.includes(month)){
            return leave
        }
    }))

    res.status(200).json({
        leaves:filterLeaves,
        message: `Leave records for user (ID: ${id}) and month ${month}`
    });
});


// @desc Get leave Status(Approve/Reject) for a user
// @route PATCH /apistatus/:id
// @access Private
const setLeaveStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { leaveId,status } = req.body;

    const admin = await User.findById(id).exec().lean();
    if(admin.role !== 'Admin'){
        res.status(403).json({'message':'forbidden, only admin have access to this route'})
    }

    const leaves = await Leave.findByIdAndUpdate(leaveId, { status: status }, { new: true });
    res.status(200).json({leaves:leaves,  message: `Leave status for Leave (ID: ${leaveId}) is ${status}`});
});



module.exports = {
    getLeaveAllDetails,
    getUserLeaveDetails,
    createLeaveDetails,
    setLeaveStatus
};





















// const User = require('../models/User')
// const Leave = require('../models/Leave');

// const asyncHandler = require('express-async-handler')

// // @desc Get all users
// // @route GET /users
// // @access Private
// const getLeaveAllDetails = asyncHandler(async (req, res) => {
//     let { employee, type, startDate, status, page = 1 } = req.query;
//     // let { employee, type, startDate, endDate, status, page = 1 } = req.query;

//     const query = {};

//     if (employee) query.name = employee;
//     if (type) query.leaveType = type;
//     if (date) query.startDate = startDate;
//     // if (endDate) query.endDate = endDate;
//     if (status) query.endDate = status;

//     const limit = 50;
//     const skip = (page - 1) * limit;

//     const leaves = await Leave.find(query).skip(skip).limit(limit).lean();

//     if (!leaves || leaves.length === 0) {
//         return res.status(404).json({ message: 'No leave records found' });
//     }

//     res.status(200).json({ "leaves": leaves, "message":`This is all customs Leaves with having query ${query}` });
// });


// // @desc Create new user
// // @route POST /users
// // @access Private
// // const createNewUser = asyncHandler(async (req, res) => {
// //     const { username, password, roles } = req.body

// //     // Confirm data
// //     if (!username || !password || !Array.isArray(roles) || !roles.length) {
// //         return res.status(400).json({ message: 'All fields are required' })
// //     }

// //     // Check for duplicate username
// //     const duplicate = await User.findOne({ username }).lean().exec()// .exec() It is used to search for matches of a regular expression within a specified string
// // //lean() 
// //     if (duplicate) {
// //         return res.status(409).json({ message: 'Duplicate username' })
// //     }

// //     // Hash password 
// //     const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

// //     const userObject = { username, "password": hashedPwd, roles }

// //     // Create and store new user 
// //     const user = await User.create(userObject)

// //     if (user) { //created 
// //         res.status(201).json({ message: `New user ${username} created` })
// //     } else {
// //         res.status(400).json({ message: 'Invalid user data received' })
// //     }
// // })

// // @desc Update a user
// // @route PATCH /users
// // @access Private
// const createLeaveDetails = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const { leaveType, startDate, endDate, reason } = req.body;
    
//     try{

//         if(!leaveType || !startDate || !endDate || !reason){
//             return res.status(400).json({ message: '!leaveType || !startDate || !endDate || !reason are required'});
//         }
        
//         const user = await User.findById(id).select('-password').lean();
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const createLeave = await Leave.create({user: id, name: user.name, leaveType:leaveType, startDate : startDate, endDate : endDate, reason : reason, status:"Pending"});

//         console.log('leave is created:', createLeave);
//         res.status(200).json({ "leaves": createLeave, "message":`This is new Leaves created by ${id} and ${user.name}` });

//     } catch (err) {
//         console.error('Update failed:', err.message);
//         res.status(500).json({ message: 'An error occurred during update' });
//     }
// });


// // @desc Delete a user
// // @route DELETE /users
// // @access Private
// const getLeaveDetails = asyncHandler(async (req, res) => {
//     const { id } = req.body;

//     // Confirm data
//     if (!id) {
//         return res.status(400).json({ message: 'User ID required' });
//     }

//     const user = await User.findById(id).exec();
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     const limit = 50;
//     const skip = (page - 1) * limit;

//     const leaves = await Leave.find({user:id}).skip(skip).limit(limit).lean();

//     if(!leaves){
//         return res.status(404).json({ message: `Leaves for ${id} not found` });
//     }

//     res.status(200).json({ "leaves": leaves, "message":`This is Leaves for ${id} and ${user.name}` });
// });


// module.exports = {
//     getLeaveAllDetails,
//     createLeaveDetails,
//     getLeaveDetails
// }