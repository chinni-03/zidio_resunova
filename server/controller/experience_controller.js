const Experience = require("../model/experience");

module.exports.create = async (req, res)=>{
    try {
        const newExperience = await Experience.create(req.body);
        return res.status(200).json({
            message: "experience is created!!",
            success: true,
            newExperience
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server in creating the experience!!",
            details: error.message
        })
    }
}

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