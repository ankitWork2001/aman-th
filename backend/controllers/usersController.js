const User = require('../models/User')
const Attendance = require('../models/Attendance');
const DocumentUpload = require('../models/DocumentUpload');
const Leave = require('../models/Leave');
const Notification = require('../models/Notification');
const OngoingTask = require('../models/OngoingTask')

const asyncHandler = require('express-async-handler')


// @desc Get user
// @route GET /api/user/personaldetails/:id
// @access Private
const getUserDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const user = await User.findById(id).select('-password').lean();

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
});

// @desc Update a user
// @route PUT /api/user/personaldetails/:id
// @access Private
const updateUserDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, role, designation, department, joiningDate, phone, performance } = req.body;

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const duplicateEmail = await User.findOne({ email, _id: { $ne: id } }).lean().exec();
    if (duplicateEmail) {
        return res.status(409).json({ message: 'Email already in use by another user' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name: name !== undefined ? name : user.name,
                email: email !== undefined ? email : user.email,
                role: role !== undefined ? role : user.role,
                designation: designation !== undefined ? designation : user.designation,
                department: department !== undefined ? department : user.department,
                joiningDate: joiningDate !== undefined ? joiningDate : user.joiningDate,
                phone: phone !== undefined ? phone : user.phone,
                performance: performance !== undefined ? performance : user.performance
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(500).json({ message: 'User update failed' });
        }

        console.log('Updated:', updatedUser);
        res.status(200).json({ message: `${updatedUser.name} updated` });
    } catch (err) {
        console.error('Update failed:', err.message);
        res.status(500).json({ message: 'An error occurred during update' });
    }
});


// @desc Delete a user
// @route DELETE /api/user/personaldetails/:id
// @access Private
const deactivateUserDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'User ID required' });
    }

    const user = await User.findById(id).exec();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    await OngoingTask.deleteMany({ user: id }).exec();
    await Notification.deleteMany({ user: id }).exec();
    await Leave.deleteMany({ user: id }).exec();
    await DocumentUpload.deleteMany({ user: id }).exec();
    await Attendance.deleteMany({ user: id }).exec();
    await user.deleteOne();

    const reply = `User ${user.username || user.email || user._id} deleted successfully`;

    res.status(200).json({ message: reply });
});

// @desc Changed Password of user
// @route PATCH /personaldetails/resetpassword/:id
// @access Private
const resetPassword  = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {password} = req.body

    if (!id) {
        return res.status(400).json({ message: 'User ID required' });
    }

    const user = await User.findById(id).exec();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const hashedPwd = await bcrypt.hash(password, 10)
    const changedPassword = await User.findByIdAndUpdate(id, { password: hashedPwd }, { new: true });

    res.status(200).json({ user:changedPassword, message: `Your userId ${id} and password is changed to ${password} ` });
});


module.exports = {
    resetPassword,
    getUserDetails,
    updateUserDetails,
    deactivateUserDetails,
}