const User = require('../models/User');
const DocumentUpload = require('../models/DocumentUpload');
const asyncHandler = require('express-async-handler');

// @desc Get all documentUpload records (optionally filtered)
// @route GET /api/document
// @access Private
const getDocumentAllDetails = asyncHandler(async (req, res) => {
    let { employee, page = 1 } = req.query;
    // let { employee, type, status, page = 1 } = req.query;

    const query = {};
    if (employee) query.name = employee;
    // if (employee) query.type = type;
    // if (employee) query.status = status;

    const limit = 50;
    const skip = (page - 1) * limit;

    const documents = await DocumentUpload.find(query).skip(skip).limit(limit).lean();

    if (!documents || documents.length === 0) {
        return res.status(404).json({ message: 'No documentUpload records found' });
    }

    res.status(200).json({
        documentUpload: documents,
        message: `Fetched ${documents.length} documentUpload record(s)`
    });
});

// @desc Submit or update documentUpload for a user
// @route POST /api/document/:id
// @access Private
const submitDocumentDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, adhar, pan, resume } = req.body;

    if (!name && !adhar && !pan && !resume) {
        return res.status(400).json({ message: 'At least one field (name, adhar, pan, resume) is required' });
    }

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const existingDoc = await DocumentUpload.findOne({ user: id }).lean();

    if (existingDoc) {
        const updatedDoc = await DocumentUpload.findByIdAndUpdate(
            existingDoc._id,
            {
                ...(adhar && { aadharCard: adhar }),
                ...(pan && { panCard: pan }),
                ...(resume && { resume }),
                ...(name && { name })
            },
            { new: true }
        );

        return res.status(200).json({
            documentUpload: updatedDoc,
            message: `DocumentUpload updated for user ${user.name} (ID: ${id})`
        });
    } else {
        const createdDoc = await DocumentUpload.create({
            user: id,
            name: name || user.name,
            ...(adhar && { aadharCard: adhar }),
            ...(pan && { panCard: pan }),
            ...(resume && { resume })
        });

        return res.status(201).json({
            documentUpload: createdDoc,
            message: `DocumentUpload created for user ${user.name} (ID: ${id})`
        });
    }
});

// @desc Get documentUpload for a specific user
// @route GET /api/document/:id
// @access Private
const getDocumentDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    const user = await User.findById(id).lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const documentUpload = await DocumentUpload.findOne({ user: id }).lean();

    if (!documentUpload) {
        return res.status(404).json({ message: `No documentUpload found for user ${id}` });
    }

    res.status(200).json({
        documentUpload,
        message: `DocumentUpload for user ${user.name} (ID: ${id})`
    });
});

const updateDocumentDetails = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, adhar, pan, resume } = req.body;

    if (!id) {
        return res.status(400).json({ message: 'User ID is required' });
    }

    if (!name && !adhar && !pan && !resume) {
        return res.status(400).json({ message: 'At least one field (name, adhar, pan, resume) is required' });
    }

    const user = await User.findById(id).select('-password').lean();
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if(user.role !== 'Admin'){
        return res.status(403).json({ message: 'forbidden, only Admin is allowed for ' });
    }

    const existingDoc = await DocumentUpload.findOne({ user: id }).lean();

    if (existingDoc) {
        const updatedDoc = await DocumentUpload.findByIdAndUpdate(
            existingDoc._id,
            {
                ...(adhar && { aadharCard: adhar }),
                ...(pan && { panCard: pan }),
                ...(resume && { resume }),
                ...(name && { name })
            },
            { new: true }
        );
        res.status(200).json({
            documentUpload: updatedDoc,
            message: `DocumentUpload for user ${user.name} (ID: ${id})`
        });
    }
    res.status(400).json({
        message: `Document is not Updated for user ${user.name} (ID: ${id})`
    });
});

module.exports = {
    getDocumentAllDetails,
    submitDocumentDetails,
    getDocumentDetails,
    updateDocumentDetails
};



























// const User = require('../models/User');
// const Attendance = require('../models/Attendance');
// const asyncHandler = require('express-async-handler');
// const DocumentUpload = require('../models/DocumentUpload');

// // @desc Get all documentUpload details for a user (paginated)
// // @route GET /documentUpload/:id
// // @access Private
// const getDocumentAllDetails = asyncHandler(async (req, res) => {
//     let { employee, type, status, page = 1 } = req.query;

//     const query = {};

//     if (employee) query.name = employee;
//     // if (type) query.leaveType = type;
//     // if (status) query.status = status;
    
//     const limit = 50;
//     const skip = (page - 1) * limit;

//     const documentUpload = await DocumentUpload.find(query).skip(skip).limit(limit).lean();

//     if (!documentUpload || documentUpload.length === 0) {
//         return res.status(404).json({ message: 'No documentUpload records found' });
//     }

//     res.status(200).json({
//         documentUpload,
//         message: `All documentUpload records for user ID ${id}`
//     });
// });

// // @desc Mark documentUpload for a user
// // @route POST /documentUpload/:id
// // @access Private
// const submitDocumentDetails = asyncHandler(async (req, res) => {
//     const { id } = req.params;
//     const { name, adhar, pan, resume } = req.body;

//     if (!name && !adhar && !pan && !resume) {
//         return res.status(400).json({ message: 'Atleast one fiels (!name && !adhar && !pan && !resume) required' });
//     }

//     const user = await User.findById(id).select('-password').lean();
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }
//     const documentUpload = await DocumentUpload.findById({user:id}).exec().lean();

//     if(documentUpload){
//         const documentId = documentUpload._id;
//         const updatedDocumentUpload = await DocumentUpload.findByIdAndUpdate(documentId, { aadharCard:adhar, panCard:pan, resume:resume, }, { new: true });
//         res.status(201).json({
//             DocumentUpload: updatedDocumentUpload,
//             message: `Updated DocumentUpload is for the user ${user.name} (ID: ${id})`
//         });

//     }else{
//         const createDocumentUpload = await DocumentUpload.create({
//             user: id,
//             name: user.name,
//             aadharCard:adhar,
//             panCard:pan,
//             resume:resume,
//         });
//         res.status(201).json({
//             DocumentUpload: createDocumentUpload,
//             message: `New DocumentUpload created for user ${user.name} (ID: ${id})`
//         });
//     }

// });

// // @desc Get documentUpload status for a user on a specific date
// // @route GET /documentUpload/status?id=USER_ID&date=YYYY-MM-DD
// // @access Private
// const getDocuemtDetails = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     if (!id) {
//         return res.status(400).json({ message: 'User ID is required' });
//     }

//     const user = await User.findById(id).exec();
//     if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//     }

//     const documentUpload = await Attendance.find({ user: id }).exec().lean();

//     if (!documentUpload || documentUpload.length === 0) {
//         return res.status(404).json({ message: `No leave records found for user ${id}` });
//     }

//     res.status(200).json({
//         documentUpload:documentUpload,
//         message: `Leave records for user ${user.name} (ID: ${id})`
//     });
    
// });

// module.exports = {
//     getDocuemtDetails,
//     getDocumentAllDetails,
//     submitDocumentDetails,
// };
