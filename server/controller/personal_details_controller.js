const PersonalDetails = require("../model/personaldetails");
const User = require("../model/user");

module.exports.createdetails = async (req, res)=>{
    try {
        const {username, useremail, phone, designation,portfolio,github,linkedin} = req.body;
        if(username === "" || useremail===""){
            return res.status(400).json({
                message: "need to enter name and email",
                success: false
            })
        }
        const personaldetails = await PersonalDetails.create({
            username: username,
            useremail: useremail,
            phone: phone,
            designation: designation,
            portfolio: portfolio,
            github: github,
            linkedin: linkedin,
            user: req.user._id
        });
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

module.exports.getAllDetails = async (req, res)=>{
    try {
        const userId = req.params.userId
        const getAllData = await PersonalDetails.find({user: userId})
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
            message: "Internal server error in getting all the personal details!!",
            error: error.message
        })
    }
}

module.exports.getDetails = async (req, res)=>{
    try {
        const details = await PersonalDetails.findById(req.params.id);
        console.log(req.user)
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