const mongoose = require('mongoose');

// Creation of Notes Schema
const notesSchema = new mongoose.Schema({
    Notes : {
        type: String,
        required: true,
    },
    Numbers : {
        type: Number,
        required: true,
        validate(value) {
          if (value > 15) {
            throw new Error("Please Enter less than or equal to 15")
          }
        }
    }, 
    owner : {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : 'User'
    }
})

// 
notesSchema.pre("save", async function (next) {
  const note =  this;
  console.log('Just Before Saving!');
  next();
});

// Creation of Model 
const Note = new mongoose.model('Note',notesSchema)
module.exports = Note


















































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