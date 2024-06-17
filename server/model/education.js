const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
        institute:{
            type: String,
            required: true
        },
        qualification:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true
        },
        startgraduyear:{
            type: Number,
            required: true
        },
        startgradumonth:{
            type: Number,
            required: true
        },
        endgraduyear:{
            type: Number,
            required: true
        },
        endgradumonth:{
            type: Number,
            required: true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true
        }
},{
    timestamps: true
})

const Education = mongoose.model("Education", educationSchema);
module.exports = Education;