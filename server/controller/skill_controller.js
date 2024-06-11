const Skill = require("../model/skill");

module.exports.create = async (req, res)=>{
    try {
        const newSkill = await Skill.create(req.body);
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