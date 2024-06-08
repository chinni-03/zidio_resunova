const mongoose = require('mongoose');

const persondetailsschema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
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
    instagram:{
        type: String
    },
    facebook:{
        type: String
    }
},{
    timestamps: true
})

const PersonalDetails = mongoose.model('PersonalDetails', persondetailsschema);
module.exports = PersonalDetails;