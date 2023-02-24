const mongoose = require('mongoose');

// * Creation of Training Record Schema

const trainingRecordSchema = new mongoose.Schema({
    
    // * TR => Training Record
    // ! Introductionary Information Datatype

    TRDate: {
        type: Date,
        default: Date.now,
    },

    TRCourseDescription : {
        type: String,
    },

    TREvaluationCriteria : {
        type: String,
    },

    TRDepartment: {
        type: String,
    },

    TRSection: {
        type: String,
    },

    TRDuration: {
        type: String,
    },

    TRInternalExternal: {
        type: [{
          TRInterExterOption: {
            type: String, 
            enum: ['internal', 'external'], // * Enum to restrict the value to 'Internal' or 'External'
          }
        }],
        default: []
    },
    
    // ! Training Detail Datatype
    
    TRTrainingDetail: {
        type: [{
          TRName: {
            type: String
          },
  
          TREmployeeCode: {
            type:Number
          },
  
          TRDesignation: {
            type:String
          },
    
          TREvaluatedBy: {
            type:String
          },
  
          TRModeOfEvaluaton: {
            type:String
          },
  
          TRResults: {
            type:String
          }
        }],
  
        default: []
      },

})


// * Creation of Model 

const trainingRecord = new mongoose.model('trainingRecord',trainingRecordSchema)
module.exports = trainingRecord















































// notesSchema.pre("save", async function (next) {
//   const note =  this;
//   console.log('Just Before Saving!');
//   next();
// });







// Notes : {
//   type: String,
//   required: true,
// },
// Numbers : {
//   type: Number,
//   required: true,
//   validate(value) {
//     if (value > 15) {
//       throw new Error("Please Enter less than or equal to 15")
//     }
//   }
// }, 
// owner : {
// type : mongoose.Schema.Types.ObjectId,
// required : true,
// ref : 'User'
// }
// }, {
// timestamps: true
// })









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