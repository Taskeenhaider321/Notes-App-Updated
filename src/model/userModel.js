const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Creation of Schema
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowerCase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is Not Valid!");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.includes("password")) {
          throw new Error("It cannot be word password!");
        }
      },
    },
    
    tokens: [{
      token: {
          type: String,
          required: true
        }
    }]
})

// Virtual Get data to check which user create the  note
userSchema.virtual('notes', {
  ref : 'Note',
  localField : '_id', 
  foreignField : 'owner'
})

// Get UseFull Information of User
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  delete userObject.confirmPassword
  delete userObject.tokens
  return userObject  
}

// Authentication Schema
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'thisisthesecret');
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
};

// Login Schema
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to Login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to Login");
  }
  return user;
};

// Hash the plain text password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Creation of Model 
const User = new mongoose.model('User', userSchema)
module.exports = User

















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