const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * Creation of Add Employee Schema

const employeeSchema = new Schema({
    
        
    // * PR => Personal Recuision
    // ! Introductionary Information Datatype
    
    PRDate: {
        type: Date,
        default: Date.now,
    },

    PRStation : {
        type: String
    },

    PRJobTitle : {
        type: String,

    },

    department: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
      required: true
    },

    section: {
      type: Schema.Types.ObjectId,
      ref: 'Section',
      required: true
    },

    PRImmediateSupervisior : {
      type: String,
    },

    // ! Employement Terms Information Datatype
    
    PREmploymentTerm: {
      type: [{
        PREmploymentType: [{
          type: String,
          // * Enum to restrict the value from the following
          enum: ['permanent', 'contractual', 'specificRecord','partTime','temporary','internship']
        }],

        PREmploymentTypeSpecify: {
          type: String,
        }

      }],

      default: []
    },

    // ! Salary Information Datatype
    
    PRSalary: {
      type: [{
        PRSalaryAmount: {
          type: Number
        },

        PRSalaryCommission: {
          type:Number
        },

        PRAllowanceDetail: {
          type:String
        },

        PRIncentivesDetail: {
          type:String
        },

        PRGrossSalary: {
          type:Number
        },

        PRNetSalary: {
          type:Number
        }
      }],

      default: []
    },

    // ! Hiring Specifications Information Datatype
    
    PRHiringSpecification: {
      type: [{
        PRMiniQualification: {
          type:String
        },

        PRMiniExperienced: {
          type:String
        },

        PRIndustrySpecificExp: {
          type:String
        },

        PRAgeBracket: {
          type:Number
        },

        PRRequiredTravelling: {
          type:Number
        },

        PRComputerSkill: [{
          type: String,
          // * Enum to restrict the value from the following
          enum: ['high', 'medium', 'average','notApplicable']
        }],

        PRCommunicationSkill: [{
          type: String,
          // * Enum to restrict the value from the following
          enum: ['high','medium', 'average','notApplicable']
        }],

          default: []
        }]
    },

    // ! Main Job Responsibilty Information Datatype
    
    PRmainJobResponsibility: {
      type: String
    },
 
    // ! Justification Information Datatype
    
    PRJustification: {
      type: [{
        PRRequestInitiatedBy: {
          type:String
        },

        PRDesignation: {
          type:String
        },

        PRJustificationOption: [{
        type: String,
        // * Enum to restrict the value from the following
        enum: ['newBusinessNeed', 'newStructureNeed', 'newTargetRequirement','departmentExtension','workOverloadSharing','employeeResignation']
      }],

      default: []
    }],
    },

    // ! Human Resource(HR) Recommendation Information Datatype
    
    PRHRRecommendation: {
      type: [{
        PRDiscussionRequired: {
          type: String,
        },

        PRReason: {
          type:String
        },

        PRRecommendationOption: [{
          type: String,
          enum: ['approved', 'disapproved']
        }],

        default: []

      }],

    // ! Final Approval Information Datatype
    
    PRFinalApproval: {
      type: [{
      PRCommentRequired: {
        type: String,
      },

      PRApprovalOption: [{
        type: String,
        enum: ['approved', 'notApproved','pending','holdForFurtherDiscussion'] // * Enum to restrict the value from the following
      }],

      default: []

      }]
    }
    },

    firstName: { 
        type: String, 
        required: true 
    },

    lastName: { 
        type: String, 
        required: true 
    },

    email: { 
        type: String, 
        required: true 
    },

    phone: { 
        type: String 
    },

    department: { 
        type: String 
    },

    training: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Training' 
    }]

});

// * Creation of Model

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;