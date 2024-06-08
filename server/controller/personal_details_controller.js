const PersonalDetails = require("../model/personaldetails");

module.exports.createdetails = async (req, res)=>{
    try {
        const {username, useremail} = req.body;
        if(username === "" || useremail===""){
            return res.status(400).json({
                message: "need to enter name and email",
                success: false
            })
        }
        const personaldetails = await PersonalDetails.create(req.body);
        return res.status(200).json({
            message: "you have enter your personal details",
            success: true,
            personaldetails
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in creating the personal details!!",
            error: error.message
        })
    }
}

module.exports.updateDetails = async (req, res)=>{
    try {
        const details = await PersonalDetails.findById(req.params.id);
        if(!details){
            return res.status(400).json({
                message: "details not found or not available!!!",
                success: false
            })
        }
        details.username = req.body.username;
        details.portfolio = req.body.portfolio;
        details.useremail = req.body.useremail;
        details.github = req.body.github;
        details.linkedin= req.body.linkedin;
        details.facebook= req.body.facebook;
        details.instagram = req.body.instagram;
        details.phone = req.body.phone;
        details.designation= req.body.designation
        await details.save();
        return res.status(200).json({
            message: "user details updated successfully!!",
            success: true,
            details
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in updating the personal details!!",
            error: error.message
        })
    }
}

module.exports.deleteDetails = async (req, res)=>{
    try {
        const details = await PersonalDetails.findByIdAndDelete(req.params.id);
        if(!details){
            return res.status(400).json({
                message: "details not found or not available!!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "user details deleted successfully!!",
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in deleting the personal details!!",
            error: error.message
        })
    }
}

module.exports.getDetails = async (req, res)=>{
    try {
        const details = await PersonalDetails.findById(req.user._id);

        if(!details){
            return res.status(400).json({
                message: "details not available or does not exist",
                success: false,
            })
        }
        return res.status(200).json({
            message: "check your resume",
            success: true,
            details
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in getting the personal details!!",
            error: error.message
        })
    }
}