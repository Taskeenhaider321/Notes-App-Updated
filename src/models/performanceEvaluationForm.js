const mongoose = require('mongoose');

// * Creation of Performance Evaluation Schema

const performanceEvaluationSchema = new mongoose.Schema({

    // * PE => Performance Evaluation
    // ! Employee Profile Datatype

        
    PEEmployeeProfile: {
        
        type: [{
          
          PEEmployeeName: {
            type: String,
          },
  
          PEDateOfJoining: {
            type: Date(),
          },
  
          PEDepartment: {
            type:String
          },
  
          PEDesignatin: {
            type:String
          },
  
          PEReportsTo: {
            type:String
          },
  
          PEEmployeeCode: {
            type:Number
          },

          PEProbationDuration: {
            type:String
          },
        }],
  
        default: []
    },

    // ! Other Comments and Inspections Datatypes

    PEQualityOfWork: {
        type:String
    },

    PEQuantityOfWork: {
        type:String
    },

    PEJobKnowledge: {
        type:String
    },
 
    PEWorkAndCooperation: {
        type:String
    },

    PECommunicationSkill: {
        type:String
    },

    PEDressCode: {
        type:String
    },

    PECommentsByHR: {
        type:String
    },
    
    // ! Performance Rating Option Datatype
    
    PEOverallPerformance: [{
        type: String,
        // * Enum to restrict the value from the following
        enum: ['outstanding', 'superior', 'good','average', 'poor']
    }],
});

// * Creation of Model 

const performanceEvaluation = mongoose.model('performanceEvaluation', performanceEvaluationSchema);
module.exports = performanceEvaluation;
