const mongoose = require('mongoose');

// * Creation of Personal Recuision Schema

const personalRecuisionSchema = new mongoose.Schema({
    
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

    PRDepartment : {
      type: String,
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
          type: string,
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
})



// * Creation of Model 

const personalRecuision = new mongoose.model('personalRecuision', personalRecuisionSchema)
module.exports = personalRecuision




















































// email: {
//   type: String,
//   unique: true,
//   required: true,
//   trim: true,
//   lowerCase: true,
//   validate(value) {
//     if (!validator.isEmail(value)) {
//       throw new Error("Email is Not Valid!");
//     }
//   },
// },
// password: {
//   type: String,
//   required: true,
//   minlength: 7,
//   trim: true,
//   validate(value) {
//     if (value.includes("password")) {
//       throw new Error("It cannot be word password!");
//     }
//   },
// }





























// Virtual Get data to check which user create the  note
// personalRecuisionSchema.virtual('notes', {
//   ref : 'Note',
//   localField : '_id', 
//   foreignField : 'owner'
// })


// // Get UseFull Information of User
// userSchema.methods.toJSON = function () {
//   const user = this
//   const userObject = user.toObject()
//   delete userObject.password
//   delete userObject.confirmPassword
//   delete userObject.tokens
//   return userObject  
// }

// // Authentication Schema
// userSchema.methods.generateAuthToken = async function () {
//   const user = this;
//   const token = jwt.sign({ _id: user._id.toString() }, 'thisisthesecret');
//   user.tokens = user.tokens.concat({ token })
//   await user.save()
//   return token
// };

// // Login Schema
// userSchema.statics.findByCredentials = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error("Unable to Login");
//   }
//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) {
//     throw new Error("Unable to Login");
//   }
//   return user;
// };

// // Hash the plain text password before saving
// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
















  // user.tokens = user.tokens.concat({ token })
  // await user.save()



// Hiding Private Data Schema
// notesSchema.methods.getPublicData = async function () {
//   const user = this
//   const userObject = user.toObject()
//   delete userObject.password
//   delete userObject.tokens
//   return userObject;
// } 








 
        // validate(value) {
        //     if (!validator.isAlpha(value)) {
        //       throw new Error("Please Enter Only Notes!");
        //     }
        //   },

        // Get UseFull Information of User
// userSchema.methods.getPublicProfile = function () {
//   const user = this
//   const userObject = user.toObject()
//   delete userObject.password
//   delete userObject.confirmPassword
//   delete userObject.tokens
//   return userObject  
// }


// : user.getPublicProfile() // used in userRouter 