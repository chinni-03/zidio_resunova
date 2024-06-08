const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

module.exports.create = async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        if(name === "" || email === "" || password === ""){
            return res.status(400).json({
                message: "kindly enter the required details",
                success: false
            })
        }
        const existUser = await User.findOne({email: email})
        if(existUser){
            return res.status(402).json({
                message: "User is already exist!!",
                success: false
            })
        }
        const passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
        if(!passwordRegx.test(password)){
            return res.status(401).json({
                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 6 characters long.",
                success: false
            })
        }
        const passwordhash = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name: name,
            email: email,
            password: passwordhash
        })
        return res.status(200).json({
            message: "user resgister successfully",
            success: true,
            user: newUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in resgistering the user",
            error: error.message
        })
    }
}

module.exports.signin= async (req, res)=>{
    try {
        const {email, password} = req.body;
        if(email === "" || password === ""){
            return res.status(400).json({
                message: "kindly enter the required details",
                success: false
            })
        }
        const checkUser = await User.findOne({email: email});
        if(!checkUser || !(await bcrypt.compare(password, checkUser.password))){
            return res.status(401).json({
                message: "kindly check your email or password!!",
                success: false
            })
        }
        return res.status(200).json({
            message: "user register successfully!!",
            token: jwt.sign(checkUser.toJSON(), process.env.secretKEY, {expiresIn:"1h"})
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in signin the user",
            error: error.message
        })
    }
}

module.exports.update = async (req,res)=>{
    try {
        const {name, email, password, cpassword} = req.body;
        const user = await User.findById(req.user._id);
        if (password && cpassword && password !== cpassword) {
            return res.status(400).json({
                message: "Password does not match with confirm password",
                success: false
            });
        }

        if (name) {
            user.name = name;
        }

        if (email) {
            user.email = email;
        }
        const hashpass = await bcrypt.hash(password, 10)

        if (password) {
            user.password = hashpass;
        }
        await user.save()
        return res.status(200).json({
            message: "user details updated successfully!!",
            success: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error in updating the user",
            error: error.message
        })
    }
}