const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
        awardname:{
            type: String,
            required: true
        },
        institute:{
            type: String,
            required: true
        },
        awardyear:{
            type: Number,
            required: true
        }
},{
    timestamps: true
})

const Award = mongoose.model("Award", awardSchema);
module.exports = Award;