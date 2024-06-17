const Skill = require("../model/skill");

module.exports.create = async (req, res)=>{
    try {
        const newSkill = await Skill.create({
            skill: req.body.skill,
            user: req.user._id
        });
        return res.status(200).json({
            message: "Skill has been added successfully!",
            success: true,
            newSkill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error in adding the skill!",
            error: error.message
        })
    }
}

module.exports.update = async (req, res)=>{
    try {
        const updateSkill = await Skill.findById(req.params.id);
        if(!updateSkill){
            return res.status(400).json({
                message: "skill not available to does not found!!",
                success: false
            })
        }
        updateSkill.skill = req.body.skill;
        await updateSkill.save();
        return res.status(200).json({
            message: "Skill updated successfully!!",
            success: true,
            updateSkill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error in updating the skill!",
            error: error.message
        })
    }
}

module.exports.delete = async (req,res)=>{
    try {
        const deleteskill = await Skill.findByIdAndDelete(req.params.id);
        if(!deleteskill){
            return res.status(400).json({
                message: "skill not available to does not found!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "skill deleted successfully!!",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error in deleting the skill!",
            error: error.message
        })
    }
}

module.exports.getAllDetails = async (req, res)=>{
    try {
        const userId = req.params.userId
        const getAllData = await Skill.find({user: userId})
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
            message: "Internal server error in getting all the Skill details!!",
            error: error.message
        })
    }
}

module.exports.getskill = async (req, res)=>{
    try {
        const getskill = await Skill.findById(req.params.id);
        if(!getskill){
            return res.status(400).json({
                message: "skill not available to does not found!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "check you skill details!!",
            success: true,
            getskill
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal error in getting the skill!",
            error: error.message
        })
    }
}