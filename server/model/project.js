const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title:{
        type: String
    },
    company:{
        type: String
    },
    startmonth:{
        type: Number
    },
    startyear:{
        type: Number
    },
    endmonth:{
        type: Number
    },
    endyear:{
        type: Number
    },
    description:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;