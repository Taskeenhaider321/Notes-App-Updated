const express = require('express')
const cors = require('cors');
const app = express();
require('./src/db/connectdb')
const employeeRouter = require('./src/routers/EmployeeRouter')
const monthlyPlanRouter = require('./src/routers/MonthlyPlanRouter')
const yearlyPlanRouter = require('./src/routers/YearlyPlanRouter')
const trainingRouter = require('./src/routers/TrainingRouter')
const trainerRouter = require('./src/routers/TrainerRouter')
const departmentRouter = require('./src/routers/DepartmentRouter')
const sectionRouter = require('./src/routers/SectionRouter')


// * Connecting To Port
const port = process.env.PORT || 1126;
app.use(cors());

// ! Automatically parse incoming JSON to an object so we access it in our request handlers
app.use(express.json())
app.use(express.urlencoded({extended: false}))
  

// * Using the employeeRouter file
app.use(employeeRouter);

// * Using the monthlyPlanRouter file
app.use(monthlyPlanRouter);

// * Using the yeralyPlanRouter file
app.use(yearlyPlanRouter);

// * Using the trainingRouter file
app.use(trainingRouter);

// * Using the trainerRouter file
app.use(trainerRouter);

// * Using the departmentRouter file
app.use(departmentRouter);

// * Using the sectionRouter file
app.use(sectionRouter);


// ? listening To Port
app.listen(port, () => {
    console.log(`This is the ${port} active port`);
});

// app.get('', async (req, res) => {
//    res.send("Hello")
// })

























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