const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// * Creation of MonthlyPlan Schema

const monthlyPlanSchema = new mongoose.Schema({
  
  date: { 
    type: Date, 
    required: true 
  },

  time: { 
    type: String, 
    required: true 
  },

  department: { 
    type: String, 
    required: true 
  },

  section: { 
    type: String, 
    required: true 
  },

  trainingRequired: { 
    type: Schema.Types.ObjectId, 
    ref: 'Training' 
  },

  trainer: { 
    type: String, 
    required: true 
  },

  venue: { 
    type: String, 
    required: true 
  },

  participants: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Employee' 
  }],

});

// * Creation of Model
const MonthlyPlan = mongoose.model('MonthlyPlan', monthlyPlanSchema);
module.exports = MonthlyPlan;
