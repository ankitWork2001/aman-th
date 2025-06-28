const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const OngoingTask = require('../models/OngoingTask');

// @desc Get all AllTask
// @route GET /api/ongoingtask/
// @access Private
const getAllTaskDetails = asyncHandler(async (req, res) => {
    const {id} = req.params;
    let { page = 1 } = req.query;

    const limit = 50;
    const skip = (page - 1) * limit;

    const tasks = await OngoingTask.find({user:id}).skip(skip).limit(limit).lean();

    if (!tasks || tasks.length === 0) {
        return res.status(404).json({ message: 'No tasks records found' });
    }

    res.status(200).json({
        tasks: tasks,
        message: `Fetched ${tasks.length} tasks record(s)`
    });
});

// @desc delete Task for a user
// @route DELETE /api/ongoingtask/:id
// @access Private
const deleteTaskDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {taskid}= req.body;

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deleteOngoingTask = await OngoingTask.delete(taskid).lean();

    if (!deleteOngoingTask) {
        return res.status(404).json({ message: `Ongoing task is not found for the ${id}` });
    }
    return res.status(201).json({ message: `Ongoing task id ${taskid} is delete by the user ${id}` });
});

// @desc creating task for specific user
// @route POST /api/ongoingtask/:id
// @access Private
const createTaskDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const {task, status} = req.body

    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    const user = await User.findById(id).lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const createOngoingTask = await OngoingTask.create({user:id, task, status});

    if (!createOngoingTask) {
        return res.status(404).json({ message: `No createOngoingTask created, something went wrong` });
    }

    res.status(200).json({
        ongoingtask: createOngoingTask,
        message: `createOngoingTask for user ${user.name} (ID: ${id})`
    });
});

module.exports = {
    getAllTaskDetails,
    deleteTaskDetails,
    createTaskDetails
};

