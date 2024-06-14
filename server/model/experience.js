const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
        companyname:{
            type: String,
            required: true
        },
        position:{
            type: String,
            required: true
        },
        startyear:{
            type: Number,
            required: true
        },
        startmonth:{
            type: Number,
            required: true
        },
        endyear:{
            type: Number,
            required: true
        },
        endmonth:{
            type: Number,
            required: true
        }
},{
    timestamps: true
})

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;