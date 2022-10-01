const express = require('express');
const app = express();
require('./src/db/connectdb')
const notesRouter = require('./src/routers/notesRouter');
const userRouter = require('./src/routers/userRouter');

// Connecting To Port
const port = process.env.PORT || 3000;

// Automatically parse incoming JSON to an object so we access it in our request handlers
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Using the notesRouter file
app.use(notesRouter);
// Using the userRouter file
app.use(userRouter)

// listening To Port
app.listen(port, () => {
    console.log(`This is the ${port} active port`);
});



























// const Note = require('./src/model/notesModel');
// const User = require('./src/model/userModel');

// const main = async () => {
//     // const note = await Note.findById('6337716171c3a0198f474662')
//     // await note.populate('owner')
//     // console.log(note.owner);
//     const user = await User.findById('63376fd11e7de28b76a43431');
//     await user.populate('notes')
//     console.log(user.notes);
// }
// main()












// const myFunction = async () => {
//      const token = jwt.sign({_id:'abc123!'},'thisisthesecret', {expiresIn: '7 days'})
//     console.log(token);
    
//     const data =jwt.verify(token,'thisisthesecret')
//     console.log(data);
// }
// myFunction();