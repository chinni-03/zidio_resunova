const Project = require("../model/project");

module.exports.create = async (req, res)=>{
    try {
        const newProject = Project.create({
            title: req.body.title,
            decription: req.body.decription,
            company: req.body.company,
            startmonth: req.body.startmonth,
            startyear: req.body.startyear,
            endmonth: req.body.endmonth,
            endyear: req.body.endyear,
            user: req.user._id
        });
        return res.status(200).json({
            message: "your project hasbeen created!",
            success: true,
            newProject
        })
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
        const userId = req.params.userId
        const getAllData = await Project.find({user: userId})
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