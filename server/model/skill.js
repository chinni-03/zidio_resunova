const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
},{
    timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;

