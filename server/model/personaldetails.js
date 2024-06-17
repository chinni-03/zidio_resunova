const mongoose = require('mongoose');

const persondetailsschema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    designation:{
        type: String,
        required: true
    },
    portfolio:{
        type: String,
    },
    useremail:{
        type: String,
        required: true
    },
    github: {
        type: String,
    },
    linkedin:{
        type: String,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{
    timestamps: true
})

const PersonalDetails = mongoose.model('PersonalDetails', persondetailsschema);
module.exports = PersonalDetails;