const mongoose = require('mongoose');
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
            throw new Error("Please Enter less than 15")
          }
        }
    }
})
const Note = new mongoose.model('Note',notesSchema)
module.exports = Note


















        // const validator = require('validator')
        // validate(value) {
        //     if (!validator.isAlpha(value)) {
        //       throw new Error("Please Enter Only Notes!");
        //     }
        //   },