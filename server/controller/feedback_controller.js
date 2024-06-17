const Feedback = require("../model/feedback");

module.exports.create = async (req, res)=>{
    try {
        const existingFeedback = await Feedback.findOne({email: req.body.email});
        if(existingFeedback){
            return res.status(400).json({
                message: "We got your feedback thankyou!!",
                success: false
            })
        }
        const newFeedback = await Feedback.create(req.body);
        return res.status(200).json({
            message: "check feedback",
            success: true,
            newFeedback
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in giving in feedback!",
            error: error.message
        })
    }
}