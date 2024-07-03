const Experience = require("../model/experience");

module.exports.create = async (req, res) => {
    try {
        const { experiencedata } = req.body;
        const userId = req.user._id;

        if (!Array.isArray(experiencedata) || experiencedata.length === 0) {
            return res.status(400).json({
                message: "No experience data provided",
                success: false
            });
        }

        const experienceRecords = experiencedata.map(data => ({
            ...data,
            user: userId
        }));

        const createExe = await Experience.insertMany(experienceRecords);

        return res.status(200).json({
            message: "Experience records created successfully",
            success: true,
            createExe
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in creating the experience records",
            error: error.message
        });
    }
};

module.exports.updateExe = async (req, res) => {
    try {
        const updatedExeperience = await Experience.findById(req.params.id)

        if (!updatedExeperience) {
            return res.status(404).json({ error: 'Experience not found' });
        }
        updatedExeperience.companyname = req.body.companyname;
        updatedExeperience.position = req.body.position;
        updatedExeperience.startyear = req.body.startyear;
        updatedExeperience.startmonth = req.body.startmonth;
        updatedExeperience.endyear = req.body.endyear;
        updatedExeperience.endmonth = req.body.endmonth

        return res.status(200).json({
            message: "here is the experience data!!",
            success: true,
            updatedExeperience
        })
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while updating experience details', details: err.message });
    }
}

module.exports.deleteExe = async (req, res) => {
    try {
        const deleteData = await Experience.findByIdAndDelete(req.params.id);
        if(!deleteData){
            return res.status(400).json({
                message: "data is not available or does not exist!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "data deleted success fully!!",
            success: true
        })
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while deleting experience details', details: err.message });
    }
}

module.exports.getAllDetails = async (req, res)=>{
    try {
        const getAllData = await Experience.find({user: req.user._id}).sort({createdAt: -1})
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
            message: "Internal server error in getting all the Experience details!!",
            error: error.message
        })
    }
}

module.exports.getdetails = async (req, res)=>{
    try {
        const getData = await Experience.findById(req.params.id);
        if(!getData){
            return res.status(400).json({
                message: "Data not found or does not exist!",
                success: false,
            })
        }
        return res.status(200).json({
            message: "check your details!",
            success: true,
            getData
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in getting an data!!",
            error: error.message
        })
    }
}