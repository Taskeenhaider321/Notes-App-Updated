const mongoose = require('mongoose');

// * Creation of Training Need Assessment Schema

const trainingNeedAssessmentSchema = new mongoose.Schema({

    // * TN => Training Need
    // ! Introductionary Information Datatype
    
    TNDepartment: {
        type: String,
    },

    TNSection: {
        type: String,
    },
        
    // ! Training Need Description Datatype
    
    TNTrainingDescripton: {
        type: [{
          TNEmployeeName: {
            type: String
          },

          TNGeneralAwarenessFSMS: {
            type: String
          },
  
          TNJobDescription: {
            type:Number
          },
  
          TNWorkInstruction: {
            type:String
          },
    
          TNQSPs: {
            type:String
          },
  
          TNSOPs: {
            type:String
          },
  
          TNRelatedQRs: {
            type:String
          },

          TNSafety: {
            type:String
          },

          TNFireFighting: {
            type:String
          },

          TNGMPs: {
            type:String
          },

          TNPersoanlHygiene: {
            type:String
          },

          TNFoodSafety: {
            type:String
          },

        }],
  
        default: []
      },

});

// * Creation of Model

const trainingNeedAssessment = mongoose.model('TrainingNeedAssessment', trainingNeedAssessmentSchema);
module.exports = trainingNeedAssessment;