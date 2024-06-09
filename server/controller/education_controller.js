const Education = require("../model/education");

module.exports.createedu = async (req, res) => {
    try {
        const createEdu = await Education.create(req.body);
        return res.status(200).json({
            message: "education is created",
            success: true,
            createEdu
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in creating the education section!!",
            error: error.message
        })
    }
}

module.exports.updateEdu = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        if (!updateData.education) {
            return res.status(400).json({ error: 'Education data is required' });
        }

        const updatedEducation = await Education.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedEducation) {
            return res.status(404).json({ error: 'Education not found' });
        }

        return res.status(200).json({
            message: "here is the education data!!",
            success: true,
            updatedEducation
        })
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while updating education details', details: err.message });
    }
}

module.exports.deleteEdu = async (req, res)=>{
    try {
        const deleteData = await Education.findByIdAndDelete(req.params.id);
        if(!deleteData){
            return res.status(400).json({
                message: "data does not exist!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "data deleted successfully!!",
            success: true
        })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting education details', details: err.message });
    }
}

module.exports.getEdu = async (req, res)=>{
    try {
        const getData = await Education.findById(req.params.id);
        if(!getData){
            return res.status(400).json({
                message: "data does not exist!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "check data!!",
            success: true,
            getData
        })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while getting education details', details: err.message });
    }
}