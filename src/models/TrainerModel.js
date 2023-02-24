const mongoose = require('mongoose');

// * Creation of Trainer Schema

const trainerSchema = new mongoose.Schema({
  
  name: { 
    type: String, 
    required: true 
  },

  age: { 
    type: Number, 
    required: true 
  },

  email: { 
    type: String, 
    required: true, 
    unique: true 
  }, 

  specialties: [{ 
    type: String 
  }],

  certifications: [{ 
    type: String 

  }],

  experienceYears: { 
    type: Number 
  },

  bio: { 
    type: String 
  },
   
  created: { 
    type: Date, 
    default: Date.now 
  },

  updated: { 
    type: Date, 
    default: Date.now 
  }
});

// * Creation of model
const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = Trainer;
