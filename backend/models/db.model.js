const mongoose = require('mongoose');
mongoose.pluralize(null); //prevent mongoose from adding s 
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    fullname:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trime: true
    }
}, {
    timestamps: true
});

const DB = mongoose.model('db', dataSchema);

module.exports = DB;