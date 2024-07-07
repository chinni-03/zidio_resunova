const Award = require('../model/awards');

module.exports.create = async (req, res)=>{
    try {
        const { awarddata } = req.body;
        const userId = req.user._id;
        if (!Array.isArray(awarddata) || awarddata.length === 0) {
            return res.status(400).json({
                message: "No award data provided",
                success: false
            });
        }
        const awardRecords = awarddata.map(data => ({
            ...data,
            user: userId
        }));
        const createAward = await Award.insertMany(awardRecords);
        return res.status(200).json({
            message: "Award records created successfully",
            success: true,
            createAward
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error in creating the award!!",
            error: error.message
        })
    }
}

module.exports.update = async (req, res)=>{
    try {
        const updateaward = await Award.findById(req.params.id);
        if(!updateaward){
            return res.status(400).json({
                message: "Award is not exist or does not available!!",
                success: false
            })
        }
        updateaward.awardname = req.body.awardname;
        updateaward.institute = req.body.institute;
        updateaward.awardyear = req.body.awardyear;
        await updateaward.save();
        return res.status(200).json({
            message: "details has been updated successfully!!",
            success: true,
            updateaward
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error in updating the award!!",
            error: error.message
        })
    }
}

module.exports.delete = async (req, res)=>{
    try {
        const deletesward = await Award.deleteMany({user:req.user._id});
        if(!deletesward){
            return res.status(400).json({
                message: "Award is not exist or does not available!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "details has been deleted successfully!!",
            success: true,
        })
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error in deleting the award!!",
            error: error.message
        })
    }
}

module.exports.getAllDetails = async (req, res)=>{
    try {
        const getAllData = await Award.find({user: req.user._id}).sort({createdAt:-1})
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
            message: "Internal server error in getting all the Award details!!",
            error: error.message
        })
    }
}

module.exports.getawards = async (req, res)=>{
    try {
        const getAwards = await Award.findById(req.params.id);
        if(!getAwards){
            return res.status(400).json({
                message: "Award is not exist or does not available!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "see the award details!!",
            success: true,
            getAwards
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server error in getting the award!!",
            error: error.message
        })
    }
}