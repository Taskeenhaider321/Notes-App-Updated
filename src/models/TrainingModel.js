const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Creation of Add Training Schema

const trainingSchema = new Schema({
    
    trainingName: { 
        type: String, 
        required: true 
    },

    trainerId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Trainer' 
    },

    trainingDate: { 
        type: Date, 
        required: true 
    },

    duration: { 
        type: Number, 
        required: true 
    },

    description: { 
        type: String 
    },

    attendees: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Employee' 
    }],

    topics: [{ 
        type: String 
    }],

    materials: [{ 
        type: String 
    }],

    feedback: { 
        type: String 
    }

});

// * Creation of Model

const Training = mongoose.model('Training', trainingSchema);
module.exports = Training;