const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Creation of Add Section Schema

const sectionSchema = new Schema({
  
    name: {
        type: String,
        required: true
    },

    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },

    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

// * Creation of Model

const Section = mongoose.model('Section', sectionSchema);
module.exports = Section;
