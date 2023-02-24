const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Creation of Add Department Schema

const departmentSchema = new Schema({
  
    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    sections: [{
        type: Schema.Types.ObjectId,
        ref: 'Section'
    }]
    
});

// * Creation of Model

const Department = mongoose.model('Department', departmentSchema);
module.exports = Department;
