const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Creation of Yearly Plan Schema

const yearlyPlanSchema = new Schema({
    
    year: { 
        type: Number, 
        required: true 
    },

    trainingList: [{
        
        month: { 
            type: String, 
            required: true 
        },

        trainings: [{
        
            training: { 
                type: Schema.Types.ObjectId, 
                ref: 'Training' 
            },
        }]
    }]
});

// * Creation of Model

const YearlyPlan = mongoose.model('YearlyPlan', yearlyPlanSchema);
module.exports = YearlyPlan;