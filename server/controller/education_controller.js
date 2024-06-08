const Education = require("../model/education");

module.exports.createedu = async (req, res)=>{
    try {
        const createEdu = await Education.create(req.body);
        return res.status(200).json({
            
        })
    } catch (error) {
        
    }
}