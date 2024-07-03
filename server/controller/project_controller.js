const Project = require("../model/project");

module.exports.create = async (req, res)=>{
    try {
        const { projectedata } = req.body;
        const userId = req.user._id;
        if (!Array.isArray(projectedata) || projectedata.length === 0) {
            return res.status(400).json({
                message: "No experience data provided",
                success: false
            });
        }
        const projectRecords = projectedata.map(data => ({
            ...data,
            user: userId
        }));
        const createProject = await Project.insertMany(projectRecords);
        return res.status(200).json({
            message: "Project records created successfully",
            success: true,
            createProject
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in creating the project!",
            error: error.message
        })
    }
}

module.exports.update = async (req, res)=>{
    try {
        const findProject = await Project.findById(req.params.id);
        if(!findProject){
            return res.status(400).json({
                message: "Project not exist or does not found!",
                success: false
            })
        }
        findProject.title = req.body.title;
        findProject.company = req.body.company;
        findProject.startmonth = req.body.startmonth;
        findProject.startyear = req. body.startyear;
        findProject.endmonth = req.body.endmonth;
        findProject.endyear = req.body.endyear;
        findProject.decription = req.body.decription
        await findProject.save();
        return res.status(200).json({
            message: "project details has been updated!",
            success: true,
            findProject
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in updating the project!",
            error: error.message
        })
    }
}

module.exports.delete = async (req, res)=>{
    try {
        const findProject = await Project.findById(req.params.id);
        if(!findProject){
            return res.status(400).json({
                message: "project is not available or not found!",
                success: false
            })
        }

        return res.status(200).json({
            message: "project deleted successfully!!",
            success: true,
            findProject
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in deleting the project!",
            error: error.message
        })
    }
}

module.exports.getAllDetails = async (req, res)=>{
    try {
        const getAllData = await Project.find({user: req.user._id}).sort({createdAt: -1})
        if(!getAllData){
            return res.status(400).json({
                message: "details not found or not available!!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "check resume data",
            success: true,
            getAllData
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in getting all the project details!!",
            error: error.message
        })
    }
}

module.exports.getData = async (req, res)=>{
    try {
        const findProject = await Project.findById(req.params.id);
        if(!findProject){
            return res.status(400).json({
                message: "Project not available or does not found!",
                success: false
            })
        }
        return res.status(200).json({
            message: "Check your project!",
            success: true,
            findProject
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in finding the project!",
            error: error.message
        })
    }
}