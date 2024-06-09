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
        const { id } = req.params;
        const updateData = req.body;
        if (!updateData.education) {
            return res.status(400).json({ error: 'Education data is required' });
        }

        const updatedExeperience = await Experience.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedExeperience) {
            return res.status(404).json({ error: 'Experience not found' });
        }

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